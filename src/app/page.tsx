import AuthForm from "@/components/auth/Form";
import Categories from "@/components/landing/categories";
import HeroComponentA from "@/components/landing/hero-component-a";
import { categoriesList } from "@/config/categories";
import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";

export default async function Home() {
  // const { session } = await getUserAuth();
  // if (!session) redirect("/sign-up");

  return (
    <main className="p-2">
      <div className="light-1"></div>
      <div className="light-2"></div>
      <div className="light-3"></div>

      <HeroComponentA />
      <Categories categories={categoriesList} landing />
    </main>
  );
}
