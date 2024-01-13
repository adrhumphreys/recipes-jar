import { Recipe } from "@/components/Recipe";
import { getBySlug, getRecipes } from "@/lib/recipes";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const recipes = await getRecipes();

  return recipes.map(({ slug }) => ({
    slug,
  }));
}

export default async function RecipePage({ params: { slug } }: Props) {
  const recipe = await getBySlug(slug);

  return <Recipe recipe={recipe} />;
}
