/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J9xvoOz8fDo
 */
import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { categoriesList } from "@/config/categories";

export default function HeroComponentA() {
  // getting all the subcategories of the categories
  const categories = categoriesList.map((category) => {
    return category.subcategories.map((subcategory) => {
      return subcategory;
    });
  });
  return (
    <section className="flex flex-col items-center justify-center space-y-8 pt-12">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter text-center md:text-6xl lg:text-7xl">
          YourFitness
        </h1>
        <p className="text-lg text-center text-muted">
          Encuentra tu entrenamiento ideal
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona tu actividad" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Workouts</SelectLabel>
              {categories[0].map((subcategory) => (
                <SelectItem key={subcategory.slug} value={subcategory.slug}>
                  {subcategory.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button size="lg" type="submit" className="font-semibold">
          Buscar
        </Button>
      </div>
      <Link className="self-center" href="#">
        <Button variant="link">Eres Entrenador?</Button>
      </Link>
    </section>
  );
}
