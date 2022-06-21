export class Recipe{
    constructor(public codeRecipe:number,public nameRecipe:string,public codeCategory:number,
        public preparationTime:number,public levelDifficulty:number,public codeUser:number,public image:string,
       public dateAddRecipe:Date=new Date(),public ingredients:string[],public formPreparation:string[]){

    }
}