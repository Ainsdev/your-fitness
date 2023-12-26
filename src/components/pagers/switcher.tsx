"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  CaretSortIcon,
  CheckIcon,
  CircleIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface PagerSwitcherProps
  extends React.ComponentPropsWithoutRef<typeof PopoverTrigger> {
  current: Pick<any, "id" | "name"> //TODO type
  list: Pick<any, "id" | "name">[] //TODO type
  dashboardRedirectPath: string
}

export function PagerSwitcher({
  current,
  list,
  dashboardRedirectPath,
  className,
  ...props
}: PagerSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={isOpen}
            aria-label="Select a store"
            className={cn(
              "xxs:w-[180px] w-full justify-between px-3",
              className
            )}
            {...props}
          >
            <CircleIcon className="mr-2 h-4 w-4" aria-hidden="true" />
            <span className="line-clamp-1">{current.name}</span>
            <CaretSortIcon
              className="ml-auto h-4 w-4 shrink-0 opacity-50"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search store..." />
              <CommandEmpty>No se ha encontrado ninguna tienda.</CommandEmpty>
              <CommandGroup>
                {list.map((store) => (
                  <CommandItem
                    key={store.id}
                    onSelect={() => {
                      router.push(
                        pathname.replace(
                          String(current.id),
                          String(store.id)
                        )
                      )
                      setIsOpen(false)
                    }}
                    className="text-sm"
                  >
                    <CircleIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                    <span className="line-clamp-1">{store.name}</span>
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        current.id === store.id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                      aria-hidden="true"
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      router.push("/dashboard/list/new")
                      setIsOpen(false)
                      setIsDialogOpen(true)
                    }}
                  >
                    <PlusCircledIcon
                      className="mr-2 h-4 w-4"
                      aria-hidden="true"
                    />
                    Crear tienda
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Dialog>
  )
}
