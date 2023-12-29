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
  credits,
  analytics,
}: {
  children: React.ReactNode;
  clients: React.ReactNode;
  credits: React.ReactNode;
  analytics: React.ReactNode;
}) {
  //   const user = await currentUser()

  //   if (!user) {
  //     redirect("/signin")
  //   }

  
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
      </div>
      <div className="flex flex-col space-y-8 overflow-auto justify-center items-center">
        {session?.user.trainer_active ? <TrainerTabs /> : null}
        {session?.user.trainer_active ? clients : null}
        {/* {session?.user.trainer_active ?? credits} */}
        {children}
        {/* {session?.user.trainer_active ?? analytics} */}
      </div>
    </Shell>
  );
}
