import { Icons } from "@/components/icons";

type SubcategoryProps = {
  title: string;
  slug: string;
};

type BenefitProps = {
  title: string;
  description: string;
};

export type CategoryProps = {
  title: string;
  image: string;
  slug: string;
  benefits: BenefitProps[];
  subcategories: SubcategoryProps[];
};

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}
export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
}
export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}
