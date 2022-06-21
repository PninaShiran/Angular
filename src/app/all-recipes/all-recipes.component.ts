import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit,OnDestroy {
  sub:Subscription;
  sub1:Subscription;
  filteredRecipes:Recipe[];
  originalRecipes:Recipe[];
  check=localStorage.getItem('currentUser');
  arrCategories:Category[];
  selected:{name:string, category:number, time:number} ={name:'', category:0, time:0};
  constructor(public recipeSer:RecipeService, public categorySer:CategoryService, public myRouter:Router) { 
  } 
 
  filterRecipes(){
    this.filteredRecipes = this.originalRecipes.filter((recipe) =>{ 
    return (this.selected.name=="" || recipe.nameRecipe == this.selected.name ) && (this.selected.category==0 || recipe.codeCategory == Number(this.selected.category)) && 
     (this.selected.time==0 || recipe.preparationTime == Number(this.selected.time));
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }
  
  ngOnInit(): void {
    this.sub=this.recipeSer.getAllRecipes().subscribe((succ)=>{
      this.filteredRecipes = succ;  
      this.originalRecipes = [...succ];
    });
    this.sub1=this.categorySer.getAllCategories().subscribe((succ)=>{
      this.arrCategories = succ;
    });
  }

}
