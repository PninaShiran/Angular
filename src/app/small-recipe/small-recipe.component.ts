import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
   @Input() myRecipe:Recipe;
  constructor(config: NgbRatingConfig) {
       config.max = 5;
    config.readonly = true;
  }
  ngOnInit(): void {
  }

}
