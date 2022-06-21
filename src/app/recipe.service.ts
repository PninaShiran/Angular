import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  getAllRecipes(){
    return this.myHttp.get<Recipe[]>("https://localhost:44397/api/recipe");
  }
  addNewRecipe(r:Recipe){     
    return this.myHttp.post<Recipe>("https://localhost:44397/api/recipe",r).toPromise();
  }
  updateRecipe(code:number,r:Recipe){
    return this.myHttp.put<Recipe>("https://localhost:44397/api/recipe?code="+code,r);
    }

  getRecipeByCode(code){
   return this.myHttp.get<Recipe>("https://localhost:44397/api/recipe?code="+code); 
  }
  deleteRecipeByCode(code){
    return this.myHttp.delete<Recipe>("https://localhost:44397/api/recipe?code="+code);
  }
  constructor(private myHttp:HttpClient) { }
}
