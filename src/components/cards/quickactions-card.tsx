/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0s78R72mbFW
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CommandShortcut } from "@/components/ui/command";
import Link from "next/link";

export default function QuickActions() {
  return (
    <Card className="w-full md:w-[400px] mt-4">
      <CardHeader>
        <CardTitle>Acceso Rapido</CardTitle>
        <CardDescription>Una forma rapida</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-md font-medium">Quick Actions</h4>
          <div className="grid gap-2">
            <Link className="flex items-center gap-2" href="#">
              <Button size="sm" variant="outline">
                Edit Profile
              </Button>
              <CommandShortcut>Ctrl + E</CommandShortcut>
            </Link>
            <Link className="flex items-center gap-2" href="#">
              <Button size="sm" variant="outline">
                Change Password
              </Button>
              <CommandShortcut>Ctrl + P</CommandShortcut>
            </Link>
            <Link className="flex items-center gap-2" href="#">
              <Button size="sm" variant="outline">
                Manage Subscription
              </Button>
              <CommandShortcut>Ctrl + S</CommandShortcut>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
