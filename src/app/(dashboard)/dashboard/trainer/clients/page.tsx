import { ContractTableShell } from "@/components/tables/clients/clients-table-shell";
import { getPageSession } from "@/lib/auth/lucia";
import { db } from "@/lib/db";

import { redirect } from "next/navigation";
interface PurchasesPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function ClientsPage({
  searchParams,
}: PurchasesPageProps) {
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
    const items = await tx.contract.findMany({
      where: {
        trainerId: session?.user.userId,
      },
      skip: limit, // Skip works like limit
      take: offset, // Take works like offset
      orderBy: {
        createdAt: "desc",
      },
    });
    const count = await tx.contract.count({
      where: {
        trainerId: session?.user.userId,
      },
    });

    return { items, count };
  });

  const pageCount = Math.ceil(count / limit);
  return (
    <div>
      <ContractTableShell data={items} pageCount={pageCount} />
    </div>
  );
}
