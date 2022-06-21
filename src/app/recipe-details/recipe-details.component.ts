import {  Component, OnDestroy, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe = {
    codeRecipe: 0, nameRecipe: '', codeCategory: 0,
    preparationTime: 0, levelDifficulty: 0, codeUser: 0, image: '',
    dateAddRecipe: new Date(), ingredients: [], formPreparation: []
  };
  code: number;
  arrRecipes: Recipe[];
  sub: Subscription;
  sub1: Subscription;
  categories: Category[];
  user = !!localStorage.getItem('currentUser') ? Number(JSON.parse(localStorage.getItem('currentUser'))?.codeUser) : -1;
  selectedCategory: Category = { codeCategory: 0, nameCategory: '', routerCategory: '' };
  checkRecipe: Recipe = {
    codeRecipe: 0, nameRecipe: '', codeCategory: 0,
    preparationTime: 0, levelDifficulty: 0, codeUser: 0, image: '',
    dateAddRecipe: new Date(), ingredients: [], formPreparation: []
  };
  constructor(config: NgbRatingConfig, public recipeSer: RecipeService, public activeRoute: ActivatedRoute, public router:Router,
    public categorySer: CategoryService) {
    config.max = 5;
    config.readonly = true;
    this.activeRoute.params.subscribe((myParams) => {
      this.code = +myParams.code;
    })
  }
  ngOnDestroy(): void {
    if (this.sub && this.sub1) {
      this.sub.unsubscribe();
      this.sub1.unsubscribe();
    }
  }
  delete() {

    if (confirm('האם אתם בטוחים למחוק את המתכון?')) {
      this.recipeSer.deleteRecipeByCode(this.selectedRecipe.codeRecipe).subscribe((result) => {
       this.router.navigate(['/allRecipes']);
      });
    }
  }

  ngOnInit(): void {
    if (this.user === -1) {
      return;
    }
    this.sub = this.recipeSer.getAllRecipes().subscribe((succ) => {
      this.arrRecipes = succ;
      this.selectedRecipe = this.arrRecipes.find((item) => {
        return item.codeRecipe == this.code
      });
      this.checkRecipe = this.arrRecipes.find((item) => {
        return item.codeUser == this.user
      })

    });
    this.sub1 = this.categorySer.getAllCategories().subscribe((succ) => {
      this.categories = succ;
      console.log(this.code)
      console.log(this.selectedRecipe.codeCategory)
      this.selectedCategory = this.categories.find((item) => {
        return item.codeCategory == this.selectedRecipe.codeCategory;
      });
    })
  }

 

}
