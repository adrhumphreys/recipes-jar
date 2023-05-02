import fs from "fs";
import { join } from "path";

export type Ingredient = {
  ingredient: string;
  context?: string;
  link?: string;
};

export type Step = {
  step: string;
  title?: string;
};

export type IngredientGroup = {
  groupTitle: string;
  groupContext?: string;
  ingredients: Ingredient[];
};

export type RecipeData = {
  title: string;
  tags?: string[];
  servings?: string;
  ingredients?: Ingredient[];
  steps: Step[];
  ingredientGroups?: IngredientGroup[];
  slug: string;
};

export const directory = join(process.cwd(), "content/recipes");

export const getRecipes = (): RecipeData[] => {
  const recipes = fs.readdirSync(directory);
  return recipes.map((fileName) => {
    const fullPath = join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return {
      ...JSON.parse(fileContents),
      slug: fileName.replace(/\.json$/, ""),
    };
  });
};

export const getBySlug = async (slug: string): Promise<RecipeData> => {
  const realSlug = slug.replace(/\.json$/, "");
  const fullPath = join(directory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};
