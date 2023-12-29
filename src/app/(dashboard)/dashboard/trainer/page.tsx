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

export default async function TrainerPage() {
  const session = await getPageSession();
  
  return (
    <>
      {session?.user.trainer_active ? (
        <div className="space-y-6">
          <Card
            id="connect-to-stripe"
            aria-labelledby="connect-to-stripe-heading"
          >
            <CardHeader className="space-y-1">
              <CardTitle className="line-clamp-1 text-2xl">
                Crea tu publicacion
              </CardTitle>
              <CardDescription>
                Conectate con tu gente 
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="drop-shadow-[0_20px_50px_rgba(266,_120,_81,_0.1)] hover:drop-shadow-[0_20px_15px_rgba(6,_260,_81,_0.2)]">
                Conectar a Payku
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-bold">
            Activa tu cuenta como trainer en simples pasos
          </h1>
          <Drawer>
            <DrawerTrigger asChild>
              <Button >Activar Cuenta como Trainer</Button>
            </DrawerTrigger>
            <DrawerContent className="flex justify-center items-center ">
              <DrawerHeader>
                <DrawerTitle>Conviertete en Trainer</DrawerTitle>
                <DrawerDescription>Hazlo Rapido y sencillo</DrawerDescription>
              </DrawerHeader>
              <NewTrainerForm email={session?.user.email} name={""} phone={""} />
              <DrawerFooter className="flex justify-center items-center">
                <DrawerClose>
                  <Button variant="outline">Cancelar</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      )}
      
    </>
  );
}
