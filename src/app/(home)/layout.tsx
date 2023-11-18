import Navbar from "@/components/Navbar";
import { MainNav } from "@/components/main-nav";
import { siteConfig } from "@/config/site";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1">
      <Navbar>
        <MainNav items={siteConfig.mainNav} />
      </Navbar>
      {children}
    </div>
  );
}
