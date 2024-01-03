import PayoutForm from "@/components/forms/payout-request-form";
import { PayoutTableShell } from "@/components/tables/payouts/payouts-table-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { DrawerDialog } from "@/components/ui/drawer-dialog";

import { getPageSession } from "@/lib/auth/lucia";
import { db } from "@/lib/db";
import { Link } from "lucide-react";
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
  const { items, count } = await db.$transaction(async (tx) => {
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
    return { items, count };
  });

  const statuses = typeof status === "string" ? status.split(".") : [];
  const pageCount = Math.ceil(count / limit);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <Card
          id="credits"
          aria-labelledby="credits"
          className="flex justify-center items-center"
        >
          <CardHeader className="space-y-1">
            <CardTitle className="line-clamp-1 text-xl">150.000 CLP</CardTitle>
            <CardDescription>Disponibles para retirar</CardDescription>
          </CardHeader>
          <CardContent className="p-2 px-4">
            <DrawerDialog
              buttonLabel="Retirar"
              dialogTitle="Retirar fondos"
              dialogDescription="Retira tus fondos a tu cuenta bancaria"
            >
              <PayoutForm />
            </DrawerDialog>
          </CardContent>
        </Card>
      </div>
      <PayoutTableShell data={items} pageCount={pageCount} />
    </div>
  );
}
