import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SignOutBtn from "@/components/auth/SignOutBtn";

import { ModeToggle } from "@/components/ui/ThemeToggle";
import { getUserAuth } from "@/lib/auth/utils";
import AvatarMenu from "./avatar-menu";
import { getPageSession } from "@/lib/auth/lucia";

export default async function Navbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getPageSession();
  const nameExists = !!session?.user.name && session?.user.name.length > 5;

  console.log(nameExists);
  return (
    <nav className="p-4 flex items-center justify-between transition-all duration-300 sticky top-0 z-40 w-full dark:bg-secondary/30 backdrop-blur-3xl rounded-b-lg">
      <div className="flex items-center justify-between space-x-4">
        {children}
      </div>
      <div className="space-x-2 flex items-center">
        <ModeToggle />
        {session ? (
          <AvatarMenu user={session.user} nameExists={nameExists}></AvatarMenu>
        ) : (
          <Link href="/sign-in">Ingresar</Link>
        )}
      </div>
    </nav>
  );
}
