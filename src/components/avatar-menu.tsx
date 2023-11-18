import { Link } from "lucide-react";
import SignOutBtn from "./auth/SignOutBtn";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function AvatarMenu(props: any) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>
            {props.nameExists
              ? props.user.name
                  ?.split(" ")
                  .map((word: string[]) => word[0].toUpperCase())
                  .join("")
              : "~"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <span className="font-semibold">
            {props.nameExists ? props.user.name : "New User"}
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
  );
}

export default AvatarMenu;
