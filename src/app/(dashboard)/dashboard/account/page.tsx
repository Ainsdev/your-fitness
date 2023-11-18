import UserSettings from "@/components/auth/user-settings";
import { getPageSession } from "@/lib/auth/lucia";
import { getUserAuth } from "@/lib/auth/utils";

export default async function AccountPage() {
  const session = await getUserAuth();
  return (
    <>
      <UserSettings session={session.session} />
    </>
  );
}
