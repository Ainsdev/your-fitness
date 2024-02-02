"use client";

import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export function TrainerTabs() {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();

  const tabs = [
    {
      title: "Home",
      href: `/dashboard/trainer`,
      isActive: segment === null,
    },
    {
      title: "Clientes",
      href: `/dashboard/trainer/clients`,
      isActive: segment === "clients",
    },
    {
      title: "Retiros",
      href: `/dashboard/trainer/payouts`,
      isActive: segment === "payouts",
    },
    {
      title: "Mis Planes",
      href: `/dashboard/trainer/profile`,
      isActive: segment === "profile",
    },
    {
      title: "Ajustes",
      href: `/dashboard/trainer/settings`,
      isActive: segment === "settings",
    },
  ];

  return (
    <Tabs
      defaultValue={tabs.find((tab) => tab.isActive)?.href ?? tabs[0]?.href}
      className="sticky top-0 z-30 w-full overflow-auto bg-background px-1"
      onValueChange={(value) => router.push(value)}
    >
      <TabsList className="inline-flex items-center justify-center space-x-1.5 text-muted-foreground">
        {tabs.map((tab) => (
          <div
            role="none"
            key={tab.href}
            className={cn(
              "border-b-2 border-transparent py-1.5",
              tab.isActive && "border-foreground"
            )}
          >
            <TabsTrigger
              value={tab.href}
              className={cn(
                "inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground ring-offset-background transition-all hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
                tab.isActive && "text-foreground"
              )}
            >
              {tab.title}
            </TabsTrigger>
          </div>
        ))}
      </TabsList>
      <Separator />
    </Tabs>
  );
}
