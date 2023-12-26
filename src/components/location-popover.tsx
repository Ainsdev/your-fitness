"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J9xvoOz8fDo
 */

import { Button } from "@/components/ui/button";
import { regiones } from "@/config/regiones";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { cn } from "@/lib/utils";
import { ChevronsUpDown, Check } from "lucide-react";

export default function LocationInput({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  // getting all the subcategories of the categories
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col items-center space-y-4">
      <Popover open={open} onOpenChange={setOpen} >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value !== "" ? value : "Buscar tu Comuna..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent avoidCollisions className="w-[400px] p-0 max-h-48">
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
                    onSelect={(currentValue: React.SetStateAction<string>) => {
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
    </div>
  );
}
