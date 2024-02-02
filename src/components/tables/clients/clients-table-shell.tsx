"use client";

import * as React from "react";
import Link from "next/link";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

import { formatDate, formatId, formatCredits } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "../data-table-column-header";
import { DataTable } from "../data-table";

type Contract = {
  id: string;
  user_name: string;
  user_phone: string;
  createdAt: string;
  finishAt: string;
  specialization: string;
  total_credits: number;
};

interface ContractTableShellProps {
  data: Contract[] | any; //TODO: Fix any
  pageCount: number;
}

export function ContractTableShell({
  data,
  pageCount,
}: ContractTableShellProps) {
  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo<ColumnDef<Contract, unknown>[]>(
    () => [
      {
        accessorKey: "id",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ cell }) => {
          return <span>{formatId(Number(cell.getValue()))}</span>;
        },
      },
      {
        accessorKey: "user_name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Nombre" />
        ),
        cell: ({ cell }) => {
          return <p>{cell.getValue() as string}</p>;
        },
      },
      {
        accessorKey: "createdAt",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Fecha(Inicio)" />
        ),
        cell: ({ cell }) => {
          return <span>{formatDate(cell.getValue() as string)}</span>;
        },
      },
      {
        accessorKey: "finishAt",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Fecha(Fin)" />
        ),
        cell: ({ cell }) => {
          return <span>{formatDate(cell.getValue() as string)}</span>;
        },
      },
      {
        accessorKey: "total_credits",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Pago" />
        ),
        cell: ({ cell }) => {
          return <span>{formatCredits(cell.getValue() as number)}</span>;
        },
      },
      {
        accessorKey: "specialization",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Deporte" />
        ),
        cell: ({ cell }) => {
          return <span>{cell.getValue() as string}</span>;
        },
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
              >
                <DotsHorizontalIcon className="h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/trainer/Contracts/${row.original.id}`}>
                  Ver Detalle
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`https://api.whatsapp.com/send?phone=${row.original.user_phone}`}
                >
                  Enviar Mensaje
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`tel:${row.original.user_phone}`}>Llamar</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    []
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      pageCount={pageCount}
      searchableColumns={[
        {
          id: "createdAt",
          title: "Fecha Pago",
        },
        {
          id: "id",
          title: "ID",
        },
        {
          id: "specialization",
          title: "Deporte",
        },
      ]}
    />
  );
}
