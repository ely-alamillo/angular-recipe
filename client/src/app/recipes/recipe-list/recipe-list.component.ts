import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a test",
      "https://img0.etsystatic.com/000/0/5174401/il_fullxfull.191928196.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
