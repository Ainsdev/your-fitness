// import { notFound, redirect } from "next/navigation";

import { Shell } from "@/components/shells/shell";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { TrainerTabs } from "@/components/pagers/dashboard-tabs";
import { getPageSession } from "@/lib/auth/lucia";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
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
      <>
        <div className="flex justify-between items-center sm:items-start flex-col lg:flex-row w-full">
        {session?.user.trainer_active ? clients : null}
        {session?.user.trainer_active ? analytics : null}
        </div>
        {session?.user.trainer_active ? credits : null}
        {children}
      </>
  
  );
}
