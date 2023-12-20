import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ResetPasswordForm } from "./reset-password-form";

interface Props {
  params: {
    token: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <div className="min-h-screen bg-background flex flex-row items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Restablecer contraseña
          </h1>
          <p className="text-sm text-muted-foreground">
            Ingresa tu nueva contraseña
          </p>
        </div>
        <ResetPasswordForm token={params.token} />
        <Link
          href="/auth/login"
          className={buttonVariants({
            variant: "outline",
          })}
        >
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
}
