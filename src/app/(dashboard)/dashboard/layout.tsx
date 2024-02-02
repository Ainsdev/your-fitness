import Navbar from "@/components/Navbar";
import { SidebarNav } from "@/components/sidebar-nav";
import { Button } from "@/components/ui/button";
import { dashboardConfig } from "@/config/dashboard";
import { getPageSession } from "@/lib/auth/lucia";
import { getUserAuth } from "@/lib/auth/utils";
import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getPageSession();
  // if (!session) redirect("/sign-in");
  // console.log(session)
  return (
    <div key="1" className="flex flex-col w-full min-h-screen ">
      <Navbar>
        <nav className="flex justify-start items-center">
          <h1 className="text-2xl font-bold">YourFitness</h1>
        </nav>
      </Navbar>
      <main className="flex flex-1 p-4 md:p-8">
        <nav className="hidden md:flex flex-col items-start gap-4 pr-4 border-r w-64">
          <SidebarNav items={dashboardConfig.sidebarNav} className="p-1" />
        </nav>
        <div className="flex flex-col flex-1 ml-4">{children}</div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 md:hidden border-t h-16 flex items-center justify-around bg-background">
        <Button size="icon" variant="outline">
          <Link href="/dashboard/account">
            <HomeIcon />
          </Link>
          <span className="sr-only">Home</span>
        </Button>
        <Button size="icon" variant="outline">
          <Link href="/dashboard/trainer">
            <svg
              className=" w-6 h-6 "
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6.5 6.5 11 11" />
              <path d="m21 21-1-1" />
              <path d="m3 3 1 1" />
              <path d="m18 22 4-4" />
              <path d="m2 6 4-4" />
              <path d="m3 10 7-7" />
              <path d="m14 21 7-7" />
            </svg>
          </Link>
          <span className="sr-only">Trainer</span>
        </Button>
        <Button size="icon" variant="outline">
          <svg
            className=" w-6 h-6 "
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
            <path d="M10 2c1 .5 2 2 2 5" />
          </svg>
          <span className="sr-only">Nutrition</span>
        </Button>
        <Button size="icon" variant="outline">
          <svg
            className=" w-6 h-6 "
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
          </svg>
          <span className="sr-only">Progress</span>
        </Button>
      </footer>
    </div>
  );
}
