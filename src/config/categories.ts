import { Badge } from "@/components/ui/badge";
import { CategoryProps } from "@/lib/types";

export const categoriesList: CategoryProps[] = [
  {
    title: "Gimnasio y Acondicionamiento Físico",
    slug: "gimnasio",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subcategories: [
      { title: "General", slug: "general" },
      { title: "Crossfit", slug: "crossfit" },
      { title: "Musculacion", slug: "musculacion" },
      { title: "Fisioculturismo", slug: "fisio-culturismo" },
      { title: "Powerlifting ", slug: "power-lifting" },
    ],
    benefits: [
      {
        title: "Beneficio 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    title: "Entrenamiento Funcional",
    slug: "funcional",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=1738&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subcategories: [
      { title: "General", slug: "general" },
      { title: "HIIT", slug: "hiit" },
      { title: "Pilates", slug: "pilates" },
    ],
    benefits: [
      {
        title: "Beneficio 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        title: "Beneficio 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        title: "Beneficio 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        title: "Beneficio 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    title: "Bienestar General",
    slug: "bienestar",
    image:
      "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subcategories: [
      { title: "Asesoramiento Nutricional", slug: "nutricional" },
      { title: "Coaching", slug: "coaching" },
      { title: "Kinesiologia", slug: "kinesiologia" },
      { title: "Rehabilitacion Fisica", slug: "rehabilitacion-fisica" },
    ],
    benefits: [
      {
        title: "Beneficio 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        title: "Beneficio 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        title: "Beneficio 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        title: "Beneficio 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
];

//function to get a category by slug
export const getCategoryBySlug = (slug: string) => {
  return categoriesList.find((category) => category.slug === slug);
};

//function to get subcategories by number
export const getSubcategoriesByIndices = (objeto: CategoryProps, indices: string) =>{
  return indices.split('').map(index => objeto.subcategories[parseInt(index)]);
}

//function to get all the subcategories of a category
export const getAllSubcategories = (category: CategoryProps) => {
  return category.subcategories;
};
