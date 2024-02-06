import { Button } from "@/components/ui/button";
import PostComponent from "../_components/post";
import { PauseIcon, TrashIcon } from "@radix-ui/react-icons";
import { EditIcon, PercentIcon } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DrawerDialog } from "@/components/ui/drawer-dialog";

export default function NamePage({ params }: { params: { postId: string } }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl font-bold">Tu Publicacion {params.postId}</h2>
        <Button size="sm" variant="link" asChild>
          <Link href="/dashboard/trainer/profile"> Compartir Post </Link>
        </Button>
      </div>
      <div className="w-full max-w-md bg-card  rounded-lg shadow-md p-6 space-y-4">
        <h3 className="text-lg font-semibold  ">Analiticas</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold ">120</span>
            <span className="text-sm  ">Views</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold ">45</span>
            <span className="text-sm  ">Comments</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 pt-4">
        <PausePost />
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <DrawerDialog
                button={
                  <Button size="icon" variant="outline">
                    <EditIcon className="h-6 w-6" />
                    <span className="sr-only">Editar Publicacion</span>
                  </Button>
                }
                dialogTitle="Editar Publicacion"
                dialogDescription="Edita tu publicacion"
              >
                <PostComponent />
              </DrawerDialog>
            </TooltipTrigger>
            <TooltipContent>
              <p>Editar Publicacion</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="outline">
                <PercentIcon className="h-6 w-6" />
                <span className="sr-only">Agregar Descuento</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Editar Publicacion</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}
        <DeletePost />
      </div>
      <PostComponent />
    </div>
  );
}

const DeletePost = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="destructive">
                <TrashIcon className="h-6 w-6" />
                <span className="sr-only">Delete Post</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Eliminar Publicacion</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Estas completamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta accion no se puede deshacer. Esta publicacion sera eliminada
            definitivamente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Eliminar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
const PausePost = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="outline">
                <PauseIcon className="h-6 w-6" />
                <span className="sr-only">Pausar</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pausar Publicacion</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Estas completamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Tu Publicacion no sera visible para los usuarios. Puedes reactivarla
            cuando quieras.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Pausar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
