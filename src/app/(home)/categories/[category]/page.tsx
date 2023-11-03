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
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import { CategoryProps } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface CategoryPageProps {
  params: {
    category: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

// export function generateMetadata({ params }: CategoryPageProps) {
//   return {
//     title: toTitleCase(productCategories[params.category].title),
//     description: `Buy products from the ${params.category} category`,
//   }
// }

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category } = params;
  const {
    page,
    per_page,
    sort,
    subcategories,
    price_range,
    store_ids,
    store_page,
  } = searchParams;

  // Products transaction
  const findCategory = categoriesList.find(
    (category) => category.slug === params.category
  ) as CategoryProps;
  return (
    <Shell className="overflow-hidden">
      <PageHeader
        id="category-page-header"
        aria-labelledby="category-page-header-heading"
      >
        <PageHeaderHeading size="sm">{findCategory.title}</PageHeaderHeading>
        <PageHeaderDescription size="sm">Beneficios</PageHeaderDescription>
        <div className="mt-5 flex h-max w-full overflow-x-scroll border rounded-lg p-5 space-x-2 sm:overflow-x-hidden">
          {findCategory.subcategories.map((subcategory) => (
            <Link
              key={subcategory.slug}
              href={`/categories/${subcategory.slug}`}
            >
              <Badge>{subcategory.title}</Badge>
            </Link>
          ))}
        </div>
      </PageHeader>
      <h1>PRODUCTS</h1>
    </Shell>
  );
}
