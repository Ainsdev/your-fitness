import { getUserAuth } from "@/lib/auth/utils";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default async function Navbar() {
  const { session } = await getUserAuth();
  const nameExists = !!session?.user.name && session?.user.name.length > 5;

  return (
    <nav className="p-4 flex items-center justify-between transition-all duration-300">
      <div className="flex items-center space-x-2 sm:hidden">
        <Sheet >
          <SheetTrigger>
            <Menu className="w-6 h-6 cursor-pointer" />
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <h1 className="font-semibold hover:opacity-75 transition-hover cursor-pointer invisible sm:visible">
          <Link href="/">YourFitness</Link>
        </h1>
      </div>
      <div className="space-x-2 flex items-center">
        <ModeToggle />
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback>
                  {nameExists
                    ? session.user.name
                        ?.split(" ")
                        .map((word) => word[0].toUpperCase())
                        .join("")
                    : "~"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <span className="font-semibold">
                  {nameExists ? session.user.name : "New User"}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/account">
                <DropdownMenuItem className="cursor-pointer">
                  Account
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <SignOutBtn />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/sign-in">Ingresar</Link>
        )}
      </div>
    </nav>
  );
}
