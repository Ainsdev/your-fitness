// import { notFound, redirect } from "next/navigation";

import { Shell } from "@/components/shells/shell";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { TrainerTabs } from "@/components/pagers/dashboard-tabs";
import { getPageSession } from "@/lib/auth/lucia";
// import { PagerSwitcher } from "@/components/pagers/switcher";

export default async function StoreLayout({
  children,
  clients,
}: {
  children: React.ReactNode;
  clients: React.ReactNode;
}) {
  //   const user = await currentUser()

  //   if (!user) {
  //     redirect("/signin")
  //   }

  //   const allStores = await db
  //     .select({
  //       id: stores.id,
  //       name: stores.name,
  //     })
  //     .from(stores)
  //     .where(eq(stores.userId, user.id))

  //   const store = allStores.find((store) => store.id === storeId)

  //   if (!store) {
  //     notFound()
  //   }

  //   const subscriptionPlan = await getSubscriptionPlanAction(user.id)
  //   const allStores = [
  //     {
  //       id: 1,
  //       name: "Store 1",
  //     },
  //     {
  //       id: 2,
  //       name: "Store 2",
  //     },
  //     {
  //       id: 3,
  //       name: "Store 3",
  //     },
  //   ];
  //   const store = allStores.find((store) => store.id === storeId);
  const session = await getPageSession();
  return (
    <Shell variant="sidebar">
      <div className="xxs:flex-row flex flex-col gap-4 pr-1">
        <PageHeader className="flex-1">
          <PageHeaderHeading size="sm">Trainer Dashboard</PageHeaderHeading>
          <PageHeaderDescription size="sm">
            Administra tu perfil
          </PageHeaderDescription>
        </PageHeader>
        {/* {store && allStores.length > 1 ? (
          <PagerSwitcher
            className="sm:w-1/3"
            current={store}
            list={allStores}
            dashboardRedirectPath={"/dashboard/category/"}
          />
        ) : null} */}
      </div>
      <div className="flex flex-col space-y-8 overflow-auto justify-center items-center">
        {session?.user.trainer_active ? <TrainerTabs /> : null}
        {children}
        {session?.user.trainer_active ?? clients}
      </div>
    </Shell>
  );
}
