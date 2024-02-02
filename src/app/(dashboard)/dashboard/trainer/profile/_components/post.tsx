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

export default function PostEditComponent() {
  return (
    <div
      key="1"
      className="flex justify-center py-10 flex-col md:flex-row w-full"
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
          <Button className="absolute top-4 right-4 z-50">
            Cambiar Imagen
          </Button>
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
              <div className="text-muted-foreground">
                Trainer Profesional
              </div>
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
                  <LocateIcon className="text-muted-foreground" />
                  <span>Enfoque: </span>
                </div>
                <h3 className="text-lg font-bold">Conf42: DevOps 2024</h3>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="text-gray-500" />
                  <span>Jan 25, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GlobeIcon className="text-gray-500" />
                  <a className="text-blue-600 hover:underline" href="#">
                    https://www.conf42.com/devops2024
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <TwitterIcon className="text-gray-500" />
                  <span>conf42com</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="border-t pt-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Cloud</Badge>
                  <Badge>Kubernetes</Badge>
                  <Badge>DevOps</Badge>
                  <Badge>SRE</Badge>
                  <Badge>Tech</Badge>
                  <Badge>IT</Badge>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>CLAIM EVENT</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Is this your Event?</p>
              <p>
                Claim your Event to immediately update Event information,
                respond to reviews, and more!
              </p>
            </CardContent>
            <CardFooter>
              <Button>Claim This Event</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
