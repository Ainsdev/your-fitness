"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Lzq448Y1Dvm
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import React from "react";
import { BankAccount } from "@/lib/types";

type PayoutFormProps = {
    maxAmount: number;
    minAmount: number;
    banks: BankAccount[]
}

export default function PayoutForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bank">Banco</Label>
          <div className="flex items-center space-x-2">
            <Select>
              <SelectTrigger aria-label="Bank" id="bank">
                <SelectValue placeholder="Selecciona tu banco" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bank1">Bank 1</SelectItem>
                <SelectItem value="bank2">Bank 2</SelectItem>
                <SelectItem value="bank3">Bank 3</SelectItem>
              </SelectContent>
            </Select>
            <Button size="icon" variant="outline">
              <PlusCircledIcon />
              <span className="sr-only">Agregar Banco</span>
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Monto</Label>
          <Slider id="amount" max={1000} min={0} step={10} />
        </div>
      </div>
      <Button size='lg' className="ml-auto w-full">Generar Retiro</Button>
    </div>
  );
}
