/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YMtoe5ftM82
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  points: string;
  plan: string;
  planStatus: boolean;
  planRenewal: string;
};

export default function PointsCard(props: Props) {
  return (
    <Card key="1" className="flex flex-col">
      <CardHeader className="w-full">
        <CardTitle>Tu Plan</CardTitle>
        <CardDescription>Administra tu plan</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 divide-x py-4 w-full space-y-2">
        <div className="flex flex-col space-y-2 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Creditos Disponibles</h2>
            <p className="text-2xl font-bold">{props.points}</p>
          </div>
          <div className="flex gap-2">
            <Button>Comprar Creditos</Button>
            <Button variant="link">Mas info</Button>
          </div>
        </div>
        <div className="flex flex-col space-y-2 p-4 border-2">
          <div className="flex items-center justify-between">
            <h2 className="sm:text-xl text-lg font-bold">
              Mi Plan:
              <span className="text-sm font-normal">{props.plan}</span>
            </h2>
            <Badge variant={props.planStatus ? "secondary" : "destructive"}>
              {props.planStatus ? "Activo" : "Inactivo"}
            </Badge>
          </div>
          <div className="flex gap-2">
            {props.planStatus ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="secondary" size="sm">
                      Actualizar Plan
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <div className="flex flex-col gap-2">
                      <Button
                        className="text-destructive"
                        size="sm"
                        variant="link"
                      >
                        Cancelar
                      </Button>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button size="sm">Ver Planes</Button>
            )}
          </div>
          <p className="text-sm font-normal">
            {props.planRenewal
              ? `Tu plan se renovara automaticamente el ${props.planRenewal}`
              : "Compra un plan mensual, es como pagar netflix..."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
