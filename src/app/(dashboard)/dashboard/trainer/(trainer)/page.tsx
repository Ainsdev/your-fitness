import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getPageSession } from "@/lib/auth/lucia";
import { NewTrainerForm } from "@/components/forms/trainer-form";
import { CommandShortcut } from "@/components/ui/command";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DrawerDialog } from "@/components/ui/drawer-dialog";

export default async function TrainerPage() {
  const session = await getPageSession();

  return (
    <>
      {session?.user.trainer_active ? (
        <div className="space-y-6 w-full py-12">
          <Card className="w-full bg-card/10">
            <CardHeader>
              <CardTitle>Miembros</CardTitle>
              <CardDescription>
                Proximamente podras colaborar con otros trainers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    alt="Avatar"
                    src="https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D"
                  />
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    {session?.user.username}
                  </h3>
                  <Badge>Trainer Member</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-md font-medium">Acciones rapidas</h4>
                <div className="grid gap-2">
                  <Link className="flex items-center gap-2" href="#">
                    <Button size="sm" variant="outline">
                      Crear Nuevo Plan
                    </Button>
                    <CommandShortcut>Ctrl + E</CommandShortcut>
                  </Link>
                  <Link className="flex items-center gap-2" href="#">
                    <Button size="sm" variant="outline">
                      Configurar Planes
                    </Button>
                    <CommandShortcut>Ctrl + P</CommandShortcut>
                  </Link>
                  <Link className="flex items-center gap-2" href="#">
                    <Button size="sm" variant="outline">
                      Cambiar Numero
                    </Button>
                    <CommandShortcut>Ctrl + S</CommandShortcut>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-bold">
            Activa tu cuenta como trainer en simples pasos
          </h1>

          <DrawerDialog
            buttonLabel="Continuar"
            dialogTitle="Completa tu perfil"
            dialogDescription="Completa tu perfil para poder activar tu cuenta como trainer"
          >
            <NewTrainerForm email={session?.user.email} name={""} phone={""} />
          </DrawerDialog>
        </div>
      )}
    </>
  );
}
