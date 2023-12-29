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
import React from "react";

export default function ClientsPage() {
  const [tomorrow, setTomorrow] = React.useState(false);

  const handleTabChange = () => {
    setTomorrow(!tomorrow);
  };

  return (
    <section>
      <Card>
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
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Numero</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Hora</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">+56982196730</TableCell>
                <TableCell>Lucas Dalto</TableCell>
                <TableCell>
                  <Badge color="green">9:50</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline">
                    Posponer
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">+56982196730</TableCell>
                <TableCell>Lucas Dalto</TableCell>
                <TableCell>
                  <Badge color="green">9:50</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline">
                    Posponer
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">+56982196730</TableCell>
                <TableCell>Lucas Dalto</TableCell>
                <TableCell>
                  <Badge color="green">9:50</Badge>
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
