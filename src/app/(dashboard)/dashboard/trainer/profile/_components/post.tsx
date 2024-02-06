/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YcFRL2m7mSK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardContent,
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CalendarIcon, GlobeIcon, LocateIcon, TwitterIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const subcategories = ["Cloud", "Kubernetes", "DevOps", "SRE", "Tech", "IT"];

export default function PostComponent() {
  return (
    <div
      key="1"
      className="flex justify-center py-10 flex-col md:flex-row w-full items-center p-1 z-40 overflow-y-scroll"
    >
      <div className="flex flex-col md:flex-row md:max-w-6xl md:space-x-8 space-y-8 md:space-y-0 w-full">
        <Card className="md:w-[40%] relative">
          <Image
            alt="Conference Banner"
            className="rounded-t-lg"
            height="300"
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />
          <CardContent className="p-4 space-y-2">
            <h2 className="text-2xl font-bold">Titulo</h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <LocateIcon className="" />
              <span>Ubicacion</span>
              {/* <CalendarIcon />
              <span>Jan 25, 2024</span> */}
            </div>
          </CardContent>
          <div className="flex items-center gap-3 p-4">
            <Avatar className="h-9 w-9">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs">
              <div className="font-medium">Juan Pablo</div>
              <div className="text-muted-foreground">Trainer Profesional</div>
            </div>
          </div>
        </Card>
        <div className="md:w-[60%] space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <LocateIcon className="text-secondary-foreground" />
                  <span>specialization</span>
                </div>
                <h3 className="text-lg font-bold">Conf42: DevOps 2024</h3>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="text-secondary-foreground" />
                  <span>Jan 25, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GlobeIcon className="text-secondary-foreground" />
                  <a className="text-blue-600 hover:underline" href="#">
                    https://www.conf42.com/devops2024
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="text-secondary-foreground" />
                  <span>3 dias gratis</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="border-t pt-4">
                <div className="flex flex-wrap gap-2">
                  {subcategories.map((subcategory) => (
                    <Badge key={subcategory}>{subcategory}</Badge>
                  ))}
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>19$/hr</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Que obtienes?</p>
              <p>
                Descripcion del curso, que incluye, que no incluye, que...
              </p>
            </CardContent>
            <CardFooter>
              <Button>Comprar</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
