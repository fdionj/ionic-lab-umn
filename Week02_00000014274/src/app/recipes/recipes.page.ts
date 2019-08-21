import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  getRecipe(recipeId: string){
    let recipeDetail: Object;
    recipeDetail = this.recipesService.getRecipe(recipeId);
    console.log(recipeDetail);
  }

  deleteRecipe(recipeId: string){
    let recipeNew: Object;
    recipeNew = this.recipesService.deleteRecipe(recipeId);
    this.recipes = this.recipesService.getAllRecipes();
  }

}
