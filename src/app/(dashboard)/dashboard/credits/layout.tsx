import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";


export default function Layout({ children }: { children: React.ReactNode }) {
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
        {children}
      </div>
    </Shell>
  );
}
