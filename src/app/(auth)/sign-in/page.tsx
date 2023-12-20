"use";
import AuthForm from "@/components/auth/Form";
import { Shell } from "@/components/shells/shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { getPageSession } from "@/lib/auth/lucia";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getPageSession();
  if (session?.user) redirect("/");

  return (
    <Shell variant="centered" className="p-0">
      <Card className="w-full drop-shadow-[0_20px_50px_rgba(266,_120,_81,_0.1)] transition-all duration-150 hover:drop-shadow-[0_20px_50px_rgba(266,_120,_81,_0.25)]">
        <CardHeader>
          <CardTitle>Inicia Sesion</CardTitle>
          <CardDescription>
            Bienvenido de vuelta, a tu lugar en el deporte👋
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4">
            <Button size="sm" asChild variant="secondary">
              <Link href='/api/google'>
                <LogIn className="mr-2 h-4 w-4" aria-hidden="true" />
                Google
              </Link>
            </Button>
          </div>
          <Separator className="my-6" />
          <AuthForm action="/api/sign-in">
            <Label htmlFor="email" className="text-muted-foreground">
              Email
            </Label>
            <Input type="email" name="email" id="email" />
            <br />
            <Label htmlFor="password" className="text-muted-foreground">
              Contraseña
            </Label>
            <Input type="password" name="password" id="password" />
            <br />
          </AuthForm>
        </CardContent>
        <CardFooter className="flex w-full items-center justify-between">
          <div className="text-sm text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <Link
              aria-label="Sign Up"
              href="/sign-up"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Crear Cuenta
            </Link>
          </div>
          <div className="text-xs text-muted-foreground">
            <Link
              aria-label="Forgot Password"
              href="/password-reset"
              className=" underline-offset-4 transition-colors hover:underline"
            >
              Te olvidaste la contraseña?
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  );
};

export default Page;
