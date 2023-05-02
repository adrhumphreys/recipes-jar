import React from "react";
import type { FC } from "react";
import { Ingredient as IngredientType } from "../../lib/recipes";
import Link from "next/link";

export const Ingredient: FC<IngredientType> = ({
  ingredient,
  context,
  link,
}) => {
  if (link) {
    return (
      <p className="leadin-8 text-xl">
        <Link href={`/recipe/${link}`} className="font-medium underline">
          {ingredient}
        </Link>{" "}
        <span className="block text-lg text-gray-500">{context}</span>
      </p>
    );
  }

  return (
    <p className="text-xl leading-8">
      <span className="font-medium">{ingredient} </span>
      <span className="block text-lg text-gray-500">{context}</span>
    </p>
  );
};
