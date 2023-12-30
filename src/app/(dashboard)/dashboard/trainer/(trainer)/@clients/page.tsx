"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { CopyIcon } from "@radix-ui/react-icons";
import React from "react";

export default function ClientsPage() {
  const [tomorrow, setTomorrow] = React.useState(false);

  const handleTabChange = () => {
    setTomorrow(!tomorrow);
  };
  // const copylink = ({ e, copy }: { e: React.MouseEvent; copy: string }) =>
  //   navigator.clipboard.writeText(copy);

  return (
    <section className="px-8 flex justify-center items-center overflow-hidden w-screen md:overflow-visible md:w-max md:overflow-x-hidden">
      <Card className="flex flex-col overflow-x-scroll justify-center items-start w-max md:w-[50vw] md:overflow-x-hidden">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">
            Proximas sesiones
          </CardTitle>
          <CardDescription className="text-sm flex justify-center items-center gap-2">
            <Button
              variant={tomorrow ? "ghost" : "secondary"}
              onClick={handleTabChange}
              size="sm"
              className="hover:underline transition-all duration-200 ease-in-out"
            >
              Hoy
            </Button>
            <Button
              variant={tomorrow ? "secondary" : "ghost"}
              onClick={handleTabChange}
              size="sm"
              className="hover:underline transition-all duration-100 ease-in-out"
            >
              Mañana
            </Button>
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Hora</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Numero</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium ">9:50</TableCell>
                <TableCell>Lucas Dalto</TableCell>
                <TableCell>
                  <a href="tel:56986627555">
                    <Badge variant="secondary">
                      <CopyIcon className="mx-1" />
                      +56986627555
                    </Badge>
                  </a>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline">
                    Posponer
                  </Button>
                </TableCell>
              </TableRow>{" "}
              <TableRow>
                <TableCell className="font-medium">9:50</TableCell>
                <TableCell>Lucas Dalto</TableCell>
                <TableCell>
                  <a href="tel:56986627555">
                    <Badge variant="secondary">
                      <CopyIcon className="mx-1" />
                      +56986627555
                    </Badge>
                  </a>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline">
                    Posponer
                  </Button>
                </TableCell>
              </TableRow>{" "}
              <TableRow>
                <TableCell className="font-medium">9:50</TableCell>
                <TableCell>Lucas Dalto</TableCell>
                <TableCell>
                  <a href="tel:56986627555">
                    <Badge variant="secondary">
                      <CopyIcon className="mx-1" />
                      +56986627555
                    </Badge>
                  </a>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline">
                    Posponer
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
