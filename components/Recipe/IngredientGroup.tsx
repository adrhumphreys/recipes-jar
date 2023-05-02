import React from "react";
import type { FC } from "react";
import { IngredientGroup as Group } from "../../lib/recipes";
import { Ingredient } from "./Ingredient";

export const IngredientGroup: FC<Group> = ({
  groupTitle,
  groupContext,
  ingredients,
}) => {
  return (
    <div className="space-y-2">
      <p className="text-2xl font-bold">
        {groupTitle} {groupContext && <span>{groupContext}</span>}
      </p>
      <ul className="space-y-4">
        {ingredients &&
          ingredients.map((ingredient, pos) => (
            <li key={pos}>
              <Ingredient {...ingredient} />
            </li>
          ))}
      </ul>
    </div>
  );
};
