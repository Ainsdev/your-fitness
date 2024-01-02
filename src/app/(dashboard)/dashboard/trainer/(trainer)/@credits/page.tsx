import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowTopRightIcon, PersonIcon } from "@radix-ui/react-icons";
import { DollarSign, ViewIcon } from "lucide-react";
import Link from "next/link";

export default function CreditsPage() {
  return (
    <section className="w-full md:w-1/2 xl:w-1/3">
      <h2 className="text-xl font-bold mb-4">Tus Creditos</h2>
      <Card
        id="credits"
        aria-labelledby="credits"
        className="flex justify-center items-center md:items-start md:flex-col"
      >
        <CardHeader className="space-y-1">
          <CardTitle className="line-clamp-1 text-xl">150.000 CLP</CardTitle>
          <CardDescription>Disponibles para retirar</CardDescription>
        </CardHeader>
        <CardContent className="p-2">
          <Button className="drop-shadow-[0_20px_50px_rgba(266,_120,_81,_0.1)] hover:drop-shadow-[0_20px_15px_rgba(6,_260,_81,_0.2)]">
            Hacer Retiro
          </Button>
          <Button asChild variant="link">
            <Link href="/dashboard/trainer/credits">Ver en detalle</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
