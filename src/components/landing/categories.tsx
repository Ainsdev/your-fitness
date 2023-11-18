import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { CategoryProps } from "@/lib/types";

function Categories({
  categories,
  landing,
}: {
  categories: CategoryProps[];
  landing: boolean;
}) {
  return (
    <section
      id="categories"
      className="flex w-full flex-col-reverse text-center gap-6 space-y-6 py-10 md:flex-col sm:px-20 2xl:px-72 mt-12 "
    >
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.title} href={"categories/" + category.slug}>
            <div className="group relative overflow-hidden rounded-md">
              <AspectRatio ratio={4 / 5}>
                <div className="absolute inset-0 z-10 bg-black/60 transition-colors group-hover:bg-black/70" />
                <Image
                  src={category.image}
                  alt="sneakers"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  priority
                  quality={100}
                />
              </AspectRatio>
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="xl:text-3xl font-medium capitalize text-slate-100 text-2xl">
                  {category.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {landing && (
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl">
            Personal Trainers
          </h2>
          <Balancer className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explora a nuestros mejores entrenadores y encuentra el que mejor se adapte a
            ti.
          </Balancer>
          <Button variant="secondary" asChild size="lg" className="border-2 backdrop-filter-[blur(10px)]">
            <Link href="/categories">Encuentra tu Asesor</Link>
          </Button>
        </div>
      )}
    </section>
  );
}

export default Categories;
