import { getRecipes } from "@/lib/recipes";
import Link from "next/link";

export default function Home() {
  const recipes = getRecipes();

  return (
    <div className="space-y-4">
      <div>
        <ul>
          {recipes.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/recipe/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-lg font-bold">Utils</p>
        <ul>
          <li>
            <Link href="/utils/flour">Self raising flour calculator</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
