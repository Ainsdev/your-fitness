"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";

import { NavItem } from "@/lib/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Icons } from "@/components/icons";

import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";

interface MainNavProps {
  items?: NavItem[];
}
export function MainNav({ items }: MainNavProps) {
  const pathName = usePathname();
  //
  return pathName === "/" ? (
    <LandingNavBar items={items}></LandingNavBar>
  ) : (
    <></>
  );
}

function LandingNavBar(props: MainNavProps) {
  return (
    <div className="flex gap-6 font-mono md:gap-10">
      <Popover>
        <PopoverTrigger className="md:hidden">
          <Menu className="h-4 w-4" />
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-2">
            <Link
              key="index"
              href="/"
              className="flex items-center text-sm font-medium"
            >
              Ir a comprar
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              key="index"
              href="/"
              className="flex items-center text-sm font-medium text-muted-foreground"
            >
              Ropa
            </Link>
            <Link
              key="index"
              href="/"
              className="flex items-center text-sm font-medium text-muted-foreground"
            >
              Sneakers
            </Link>
            <Link
              key="index"
              href="/"
              className="flex items-center text-sm font-medium text-muted-foreground"
            >
              Mujer
            </Link>
            <Separator className="my-2" />
            <p className="text-sm font-medium">Tu tienda</p>
            {props.items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </div>
        </PopoverContent>
      </Popover>
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Encuentra tu Asesor</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-muted p-6 no-underline outline-none hover:scale-105 focus:shadow-md"
                      href="/"
                    >
                      <Icons.product className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Cerca de ti
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Encuentra tu asesor mas cercano.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Sistema de puntos">
                  Paga con puntos, mas flexibilidad y comodidad.
                </ListItem>
                <ListItem href="/docs/installation" title="No te gusto?">
                  Cambia tu asesor las veces que quieras.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Por que Elegirnos?"
                >
                  Es simple, mira las ventajas.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Soy Asesor</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {props.items?.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Herramientas</NavigationMenuTrigger>

            <NavigationMenuContent className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] grid-cols-1 list-none">
              <p className="text-sm leading-tight text-muted-foreground underline">
                Es gratis, no te preocupes.
              </p>
              <ListItem href="/docs" title="Mapa con lo mejor">
                Mapa con los mejores gyms recomendados.
              </ListItem>
              <ListItem href="/docs/installation" title="Calculadoras">
                Calculadoras de peso, IMC, etc.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Por que Elegirnos?"
              >
                Es simple, mira las ventajas.
              </ListItem>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-primary animate-pulse">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: "text-primary bg-secondary",
                })}
              >
                Aprende con nuestro Newsletter
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
