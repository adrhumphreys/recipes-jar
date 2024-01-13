"use client";

import { RecipeData } from "@/lib/recipes";
import { useState, type FC, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";

const useSearch = (recipes: RecipeData[]) => {
  const [query, setQuery] = useState("");

  const index = useMemo(() => {
    const options = {
      keys: ["title", "slug"],
    };

    return new Fuse(recipes, options);
  }, [recipes]);

  const results = useMemo(
    () => index.search(query).map((r) => r.item),
    [index, query]
  );

  return {
    query,
    setQuery,
    results,
  };
};

type Props = {
  recipes: RecipeData[];
};

export const Search: FC<Props> = ({ recipes }) => {
  const { query, setQuery, results } = useSearch(recipes);

  const links = results && results.length > 0 ? results : recipes;

  return (
    <div>
      <label className="font-bold" htmlFor="search">
        Search
      </label>
      <input
        type="text"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex h-9 w-full border max-w-md border-gray-900 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      />

      <div>
        <ul>
          {links.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/recipe/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
