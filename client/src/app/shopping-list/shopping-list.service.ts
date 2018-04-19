import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
  // lets our ingrdients list know we changed, otherwise it
  // doesn't update
  ingredientsChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient("Turmeric", 1),
    new Ingredient("Potatoes", 5)
  ];

  getIngredients() {
    // return [...this.ingredients];
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
