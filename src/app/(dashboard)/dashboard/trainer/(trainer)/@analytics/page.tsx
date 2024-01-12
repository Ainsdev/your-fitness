import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ArrowTopRightIcon, PersonIcon } from "@radix-ui/react-icons";
import { DollarSign, ViewIcon } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <section className="pt-5 flex flex-col justify-center items-center sm:items-start ">
      <h2 className="text-xl font-bold mb-4 self-start">Tus Estadisticas</h2>
      <div className="grid 2xl:grid-cols-3 gap-4 grid-cols-2 lg:grid-cols-1">
        <Card className="p-2 hover:border-green-300 hover:border-2 transition-all ease-in-out duration-100">
          <CardHeader className="p-2">
            <CardTitle className="text-sm font-medium">
              Vistas Totales
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <div className="text-xl font- flex justify-center items-center gap-2">
              <ViewIcon />
              +17
            </div>
          </CardContent>
        </Card>
        <Card className="p-2 hover:border-green-300 hover:border-2 transition-all ease-in-out duration-100">
          <CardHeader className="p-2">
            <CardTitle className="text-sm font-medium">
              Clientes Ultimo Mes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <div className="text-xl font- flex justify-center items-center gap-2">
              <ArrowTopRightIcon />
              +17
            </div>
          </CardContent>
        </Card>
        <Card className="p-2 hover:border-green-300 hover:border-2 transition-all ease-in-out duration-100">
          <CardHeader className="p-2">
            <CardTitle className="text-sm font-medium">
              Clientes Totales
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <div className="text-xl font- flex justify-center items-center gap-2">
              <PersonIcon />
              33
            </div>
          </CardContent>
        </Card>
        <Card className="p-2 hover:border-green-300 hover:border-2 transition-all ease-in-out duration-100">
          <CardHeader className="p-2">
            <CardTitle className="text-sm font-medium">
              Dinero Ganado
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <div className="text-xl font- flex justify-center items-center gap-2">
              <DollarSign />
              9,993,222
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
