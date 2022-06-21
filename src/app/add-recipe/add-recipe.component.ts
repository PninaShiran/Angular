import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  sub:Subscription;
  sub1:Subscription;
  arrCategories:Category[];
  newRecipe:Recipe=new Recipe(null,null,null,null,null,Number(JSON.parse(localStorage.getItem("currentUser")).codeUser),null,new Date(),null,null);
  constructor(public categorySer:CategoryService, public recipeSer:RecipeService, public myRouter:Router,
    config: NgbRatingConfig) { 
      config.max = 5;
     }
  ngOnDestroy(): void {
    this.sub1.unsubscribe();
  }
  arr1 = [""];
  arr2 = [""];
  checkArr(arr:string[]) {
    arr.forEach((element, index) => {
      if (element == "")
        arr.splice(index, 1);
      });
    arr.push("");  
  }
  trackByIdx(index: number, obj: any): any {
    return index;
  }
  finalArr(arr:string[]){
    arr.forEach((element, index) => {
      if (element == "")
        arr.splice(index, 1);
      });
      return arr;
  }
addRecipe(){
  this.newRecipe.ingredients=this.finalArr(this.arr1);
  this.newRecipe.formPreparation=this.finalArr(this.arr2);
  this.recipeSer.addNewRecipe(this.newRecipe);
  alert("המתכון נוסף בהצלחה!");
  this.myRouter.navigate(["allRecipes"]);
}
  ngOnInit(): void {
    this.sub1=this.categorySer.getAllCategories().subscribe((succ)=>{
      this.arrCategories = succ;
    });
  }

}
