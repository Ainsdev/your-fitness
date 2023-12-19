"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J9xvoOz8fDo
 */

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { regiones } from "@/config/regiones";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { ChevronsUpDown, Check } from "lucide-react";

export default function HeroComponentA() {
  // getting all the subcategories of the categories
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div
      id="hero-component"
      className="flex flex-col items-center justify-center space-y-8 py-24 sm:py-16 mb-20"
    >
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter text-center md:text-6xl lg:text-7xl">
          YourFitness
        </h1>
        <p className="text-lg text-center text-foreground px-2">
          El 70% abandona antes de lograrlo y el 20% lo hace mal. Se
          del 10%, encuentra tu asesor ideal.
        </p>
      </div>    
      <div className="flex flex-col items-center space-y-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value !== "" ? value : "Buscar en tu Zona..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-[400px] p-0">
            <Command>
              <CommandInput placeholder="Busca tu Comuna..." />
              <CommandEmpty>No se encontro...</CommandEmpty>
              {regiones.map((region) => (
                <CommandGroup
                  key={region.region.slice(0, 5)}
                  heading={region.region}
                >
                  {region.comunas.map((comuna) => (
                    <CommandItem
                      key={comuna.slice(0, 5)}
                      value={comuna}
                      onSelect={(
                        currentValue: React.SetStateAction<string>
                      ) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === comuna ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {comuna}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </Command>
          </PopoverContent>
        </Popover>
        <Button size="lg" type="submit" className="font-semibold">
          Buscar
        </Button>
      </div>
      <Link className="self-center" href="#">
        <Button variant="link">Eres Entrenador?</Button>
      </Link>
    </div>
  );
}
