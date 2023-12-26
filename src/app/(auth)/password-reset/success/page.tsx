import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-row items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Te enviamos un email
          </h1>
          <p className="text-sm text-muted-foreground">
            Revisa tu email para restablecer tu contraseña.
          </p>
          <p className="text-sm text-muted-foreground">
            No recibiste el email?{" "}
            <Link href="/auth/password-reset" className="font-semibold underline">
              Intentalo de nuevo
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
