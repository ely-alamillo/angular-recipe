import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a test",
      "https://img0.etsystatic.com/000/0/5174401/il_fullxfull.191928196.jpg"
    ),
    new Recipe(
      "Another test recipe",
      "This is a test",
      "https://img0.etsystatic.com/000/0/5174401/il_fullxfull.191928196.jpg"
    )
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
