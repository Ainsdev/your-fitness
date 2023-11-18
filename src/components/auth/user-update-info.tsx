import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";

type UserUpdateInfoProps = {
  email: string;
  name: string;
  phone: string;
  rut: string;
};

export default function UpdateInfoCard(props: UserUpdateInfoProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const { email, name, rut } = Object.fromEntries(
      form.entries()
    ) as UserUpdateInfoProps;
    if (rut.length < 9) {
      toast({
        description: "Tu RUT no es Valido",
        variant: "destructive",
      });
      return;
    }

    startTransition(async () => {
      const res = await fetch("/api/account", {
        method: "PUT",
        body: JSON.stringify({ email, name, rut }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.status === 200)
        toast({ description: "Actualizamos tu informacion." });
      router.refresh();
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cambia tus datos</CardTitle>
        <CardDescription>
          Asegurate de que tu informacion este bien.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              disabled={isPending}
              defaultValue={props.name ?? ""}
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              defaultValue={props.email ?? ""}
              name="email"
              disabled
              id="email"
              placeholder="Ingresa tu email"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Numero de Telefono</Label>
            <Input
              disabled
              defaultValue={props.phone ?? ""}
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              required
              type="tel"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rut">RUT</Label>
            <Input
              disabled={isPending}
              defaultValue={props.rut ?? ""}
              name="rut"
              id="rut"
              placeholder="Ingresa tu RUT"
              required
              type="tel"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={isPending}>Actualizar Info</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
