import { PasswordResetForm } from "../../../components/forms/password-reset-form";

export default function Page() {
  return (
    <div className="w-full pt-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Restablecer Contraseña
          </h1>
          <p className="text-sm text-muted-foreground">
            Ingresa tu email para restablecer tu contraseña.
          </p>
        </div>
        <div>
          <PasswordResetForm />
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          Vuelve a{" "}
          <a
            href="/sign-in"
            className="underline underline-offset-4 hover:text-primary"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
