import React from "react";
import type { FC } from "react";
import { RecipeData } from "../../lib/recipes";
import { Ingredient } from "./Ingredient";
import { IngredientGroup } from "./IngredientGroup";
import { Step } from "./Step";

export const Recipe: FC<{ recipe: RecipeData }> = ({ recipe }) => {
  const { title, servings, tags, ingredientGroups, ingredients, steps } =
    recipe;

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h1 className="block text-center font-heading text-4xl font-bold">
          {title}
        </h1>
        <p className="block text-center font-medium text-lightgray">
          {tags &&
            tags.map((tag) => (
              <span key={tag}>
                {tag} {"//"}{" "}
              </span>
            ))}
          <strong>{servings} servings</strong>
        </p>
      </div>
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-24">
        <div className="space-y-8 lg:w-full lg:max-w-xs">
          <ul className="space-y-4">
            {ingredients &&
              ingredients.map((ingredient, pos) => (
                <li key={pos}>
                  <Ingredient {...ingredient} />
                </li>
              ))}
          </ul>
          {ingredientGroups &&
            ingredientGroups.map((ingredientGroup, pos) => (
              <IngredientGroup {...ingredientGroup} key={pos} />
            ))}
        </div>
        <div className="w-full space-y-4">
          {steps.map((s, pos) => (
            <Step {...s} key={pos} />
          ))}
        </div>
      </div>
    </div>
  );
};
