/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zN748FLpuBl
 */
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeatureA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-secondary to-background rounded-lg relative mt-20">
      <div className="light-4 "></div>
      <div className="container px-4 md:px-6 group">
        <div className="grid items-start justify-items-start gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Para Asesores
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Pensado para asesores que quieren crecer y entregar un mejor
              servicio a sus clientes.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Crea una comunidad robusta</li>
              <li>Adquiere nuevos clientes cerca tuyo</li>
              <li>Entrega Valor a tus clientes</li>
              <li>Se valoran tus servicios y especialidades</li>
              <li>No compitas por tu precio, recibe pagos fijos</li>
            </ul>
            <Button
              size="default"
              variant="outline"
              className="bg-foreground text-secondary w-1/2 hover:w-1/3 transition-all duration-500 ease-in-out self-center"
            >
              Ver Mas
            </Button>
          </div>
          <Image
            alt="Asesores Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last group-hover:scale-95 group-hover:brightness-75 transition-all duration-500 ease-in-out"
            height="310"
            width="550"
            src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?auto=format&fit=crop&q=80&w=1742&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Para Cualquiera
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Deja que te ayuden, Entrena con los mejores asesores y superate constantemente.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Crea una comunidad robusta</li>
              <li>Adquiere nuevos clientes cerca tuyo</li>
              <li>Entrega Valor a tus clientes</li>
              <li>Se valoran tus servicios y especialidades</li>
              <li>No compitas por tu precio, recibe pagos fijos</li>
            </ul>
            <Button
              size="default"
              variant="outline"
              className="bg-foreground text-secondary w-1/2 hover:w-1/3 transition-all duration-500 ease-in-out self-center"
            >
              Ver Mas
            </Button>
          </div>
          <Image
            alt="Client Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last group-hover:scale-95 group-hover:brightness-75 transition-all duration-500 ease-in-out"
            height="310"
            src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
