import { Recipe } from "@/components/Recipe";
import { getBySlug } from "@/lib/recipes";

type Props = {
  params: { slug: string };
};

export default async function RecipePage({ params: { slug } }: Props) {
  const recipe = await getBySlug(slug);

  return <Recipe recipe={recipe} />;
}
