import { SidebarNavItem } from "@/lib/types";

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[];
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Mi Cuenta",
      href: "/dashboard/account",
      icon: "avatar",
      items: [],
    },
    {
      title: "Trainer",
      href: "/dashboard/trainer",
      icon: "store",
      items: [],
    },
    {
      title: "Creditos",
      href: "/dashboard/credits",
      icon: "credit",
      items: [],
    },
    {
      title: "Mis Trainers",
      href: "/dashboard/client",
      icon: "placeholder",
      items: [],
    },
  ],
};
