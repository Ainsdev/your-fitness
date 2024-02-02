/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hpwm9aWJrNg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="flex flex-col h-full p-6 space-y-6 w-full">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Mis Planes</h1>
        <Button className="px-6 py-2">Agregar nuevo Plan</Button>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-2">
            <CardContent className="flex items-center gap-4 w-full">
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold">Product Name</h2>
                <p className="text-muted-foreground">$99.99</p>
                <p className="text-muted-foreground">Clientes: 39</p>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-end gap-2">
              <Button asChild variant="outline">
                <Link href="/dashboard/trainer/profile/1">Editar</Link>
              </Button>
              <Button size="sm" variant="destructive">
                Pausar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
