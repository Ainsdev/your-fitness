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
import { accountbank_sbif_third } from "@/config/payments";

type PayoutFormProps = {
  maxAmount: number;
  banks: BankAccount[];
};

export default function PayoutForm(props: PayoutFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [amount, setAmount] = React.useState(0);

  return (
    //TODO: Condinional rendering: IF the maxAmount is less than 50k, then show the message
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
                {props.banks.map((bank) => (
                  <SelectItem
                    key={bank.accountbank_num}
                    value={bank.accountbank_num.toString()}
                  >
                    {
                      accountbank_sbif_third.find(
                        (b) => b.id === bank.accountbank_sbif
                      )?.name
                    }{" "}
                    - {bank.accountbank_num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* ADD LINK TO A FORMT O ADD A NEW BANK */}
            <Button size="icon" variant="outline" disabled>
              <PlusCircledIcon />
              <span className="sr-only">Agregar Banco</span>
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">
            Monto: <span className="font-bold">{amount}</span> CLP
          </Label>
          <Slider
            id="amount"
            max={props.maxAmount}
            min={55000}
            step={2000}
            onValueChange={(amount) => setAmount(amount[0])}
          />
        </div>
      </div>
      <Button size="lg" className="ml-auto w-full">
        Generar Retiro
      </Button>
    </div>
  );
}
