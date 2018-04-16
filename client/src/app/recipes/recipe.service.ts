import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Pretzel",
      "The best pretzel you will even make",
      "http://2.bp.blogspot.com/_mfIXg7TGqPw/TLsqUologEI/AAAAAAAAHc8/AzBb0T0sKk0/s1600/Bretzen+050.jpg",
      [new Ingredient("Flour", 1), new Ingredient("Butter", 1)]
    ),
    new Recipe(
      "Burger",
      "Now this is a real burger",
      "http://www.nogarlicnoonions.com/wp-content/uploads/2013/07/burger.jpg",
      [new Ingredient("Meat", 5), new Ingredient("More meat", 10)]
    )
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
