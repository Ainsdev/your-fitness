import Image from "next/image";
import Link from "next/link";

import { categoriesList } from "@/config/categories";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import { Shell } from "@/components/shells/shell";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "@/components/page-header";

import { CategoryProps } from "@/lib/types";

interface SubcategoryPageProps {
  params: {
    category: string;
    subcategory: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export function generateMetadata({ params }: SubcategoryPageProps) {
  return {
    title: params.subcategory,
    description: `Encuentra los mejores entrenadores para ${params.subcategory}`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: SubcategoryPageProps) {
  const { category, subcategory } = params;
  const { page, per_page, sort, price_range, store_ids, store_page } =
    searchParams;

  // Products transaction

  return (
    <Shell className="overflow-hidden">
      <PageHeader
        id="category-page-header"
        aria-labelledby="category-page-header-heading"
      >
        <PageHeaderHeading size="sm">{subcategory}</PageHeaderHeading>
        <PageHeaderDescription size="sm">Beneficios</PageHeaderDescription>
      </PageHeader>
      <h1>Trainers</h1>
    </Shell>
  );
}
