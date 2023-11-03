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
