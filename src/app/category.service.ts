import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

getAllCategories(){
 return this.myHttp.get<Category[]>("https://localhost:44397/api/category");
}
  constructor(private myHttp:HttpClient) {
   
  }
  
 
}

