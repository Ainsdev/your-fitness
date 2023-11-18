import { Shell } from "@/components/shells/shell";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "@/components/page-header";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Shell variant="sidebar">
      <PageHeader id="account-header" aria-labelledby="account-header-heading">
        <PageHeaderHeading size="sm">Tu Cuenta</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Administra los Ajustes de tu cuenta
        </PageHeaderDescription>
      </PageHeader>
      {children}
    </Shell>
  );
}
