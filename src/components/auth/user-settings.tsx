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
import PointsCard from "../cards/points-card";
import QuickActions from "../cards/quickactions-card";

export default function UserSettings({
  session,
}: {
  session: AuthSession["session"] | null;
}) {
  return (
    <div className="flex-col gap-4 justify-center items-center">
      <PointsCard
        plan="Plan 1"
        planRenewal="12/12/2023"
        planStatus={true}
        points="100"
      />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Informacion Personal</AccordionTrigger>
          <AccordionContent>
            {/* <div className="flex flex-col sm:flex-row gap-4 my-4">
              <Avatar>
                <AvatarImage src={session?.user.image} />
                <AvatarFallback>img</AvatarFallback>
              </Avatar>
            </div> */}
            <UpdateInfoCard
              email={session?.user.email ?? ""}
              name={session?.user.name ?? ""}
              phone={session?.user.phone?.toString() ?? ""}
              rut={session?.user.rut ?? ""}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Historial Pagos</AccordionTrigger>
          <AccordionContent>
            <p>Informacion de Pago</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* <QuickActions /> */}
    </div>
  );
}
