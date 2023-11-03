"use client";

import Image from "next/image";
import Link from "next/link";

import { categoriesList } from "@/config/categories";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Categories from "@/components/landing/categories";

export default function CategoriesPage() {
  //TODO : ADD IMAGES TO CATEGORIES
  return (
    <Shell>
      <PageHeader
        id="categories-page-header"
        aria-labelledby="categories-page-header-heading"
      >
        <PageHeaderHeading size="sm">Categorias</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Encuentra lo que estas Buscando
        </PageHeaderDescription>
      </PageHeader>
      <div
        id="categories"
        className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden p-6"
      >
        <Categories categories={categoriesList} landing={false} />
        <div className="w-full text-center grid sm:grid-cols-4 gap-4">
          {categoriesList.map((category) => (
            <div
              className="flex flex-col items-start justify-start gap-4 pt-10 text-start"
              key={category.slug}
            >
              <h1 className="text-start text-2xl font-semibold">
                {category.title}{" "}
              </h1>
              <div className="grid grid-cols-1 justify-items-start gap-4">
                {category.subcategories.map((subcategory) => (
                  <Button variant="link" asChild key={subcategory.slug}>
                    <Link
                      href={`/categories/${category.slug}/${subcategory.slug}`}
                    >
                      {subcategory.title}
                    </Link>
                  </Button>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

// 1: Main categorias ordenadas en una sola row que se desplaza horizontalmente
// 2: Titulo de la categoria y su subcategorias con una imagen pequeña
