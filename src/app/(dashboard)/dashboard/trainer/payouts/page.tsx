import PayoutForm from "@/components/forms/payout-request-form";
import { PayoutTableShell } from "@/components/tables/payouts/payouts-table-shell";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DrawerDialog } from "@/components/ui/drawer-dialog";

import { getPageSession } from "@/lib/auth/lucia";
import { db } from "@/lib/db";
import { formatCredits } from "@/lib/utils";
import Link from "next/link";

import { redirect } from "next/navigation";
interface PurchasesPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function PayoutPage({ searchParams }: PurchasesPageProps) {
  const session = await getPageSession();
  if (!session) {
    redirect("/signin");
  }
  const { page, per_page, sort, store, status } = searchParams ?? {};
  // Number of items per page
  const limit = typeof per_page === "string" ? parseInt(per_page) : 10;
  // Number of items to skip
  const offset =
    typeof page === "string"
      ? parseInt(page) > 0
        ? (parseInt(page) - 1) * limit
        : 0
      : 0;
  // Database Transaction
  const { items, count, credits, banks } = await db.$transaction(async (tx) => {
    const items = await tx.trainerPayout.findMany({
      where: {
        trainerId: session?.user.userId,
      },
      skip: limit, // Skip works like limit
      take: offset, // Take works like offset
      orderBy: {
        createdAt: "desc",
      },
    });
    const count = await tx.trainerPayout.count({
      where: {
        trainerId: session?.user.userId,
      },
    });
    //Get credits atributte from credit table
    const credits = await tx.credit.findFirst({
      where: {
        userId: session?.user.userId,
      },
    });
    //Get bank accounts
    const banks = await tx.bankAccount.findMany({
      where: {
        trainerId: session?.user.userId,
      },
    }); 
    //OPTIMIZE: This query is not necessary, we can get the bank accounts from the user only when the user pulse the button to withdraw

    return { items, count, credits, banks };
  });

  const pageCount = Math.ceil(count / limit);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <Card id="credits" aria-labelledby="credits" className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="line-clamp-1 text-xl">
              {formatCredits(credits?.credits ? credits.credits : 0)}
            </CardTitle>
            <CardDescription>
              {credits && credits.credits < 55000
                ? "Debes tener al menos $55.000 para retirar fondos"
                : "Disponibles para retirar"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 px-4">
            <DrawerDialog
              disabledButton={credits && credits.credits > 55000 ? true : false}
              buttonLabel="Retirar"
              dialogTitle="Retirar fondos"
              dialogDescription="Retira tus fondos a tu cuenta bancaria"
            >
              <PayoutForm
                maxAmount={505000}
                banks={banks}
              />
            </DrawerDialog>
          </CardContent>
          <CardFooter>
            <Link
              className="text-muted-foreground hover:underline text-xs italic"
              href="https://help.lucia.app/es/articles/5346773-por-que-mi-saldo-es-negativo"
            >
              Porque no puedo retirar?
            </Link>
          </CardFooter>
        </Card>
      </div>
      <PayoutTableShell data={items} pageCount={pageCount} />
    </div>
  );
}
