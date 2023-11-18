"use client";

import UpdateInfoCard from "./user-update-info";
import { AuthSession } from "@/lib/auth/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UploadButton } from "@/lib/uploadthing";

export default function UserSettings({
  session,
}: {
  session: AuthSession["session"] | null;
}) {
  return (
    <div className="flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Avatar>
          <AvatarImage src={session?.user.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Info Personal</AccordionTrigger>
          <AccordionContent>
            <UpdateInfoCard
              email={session?.user.email ?? ""}
              name={session?.user.name ?? ""}
              phone={session?.user.phone?.toString() ?? ""}
              rut={session?.user.rut ?? ""}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
