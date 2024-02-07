
import { Icons } from "@/components/icons";
import { FileWithPath } from "@uploadthing/react";

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

export interface Option {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface Option {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface DataTableSearchableColumn<TData> {
  id: keyof TData
  title: string
}

export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[]
}

export interface StatusPayments {
  status : "PENDING" | "PAID" | "FAILED" | "REJECTED"
}

export type BankAccount = {
  accountbank_name: string;
  accountbank_personal_id: string;
  accountbank_sbif: number;
  accountbank_type: number;
  accountbank_num: number;
};

export type FileWithPreview = FileWithPath & {
  preview: string
}

export interface StoredFile {
  id: string
  name: string
  url: string
}