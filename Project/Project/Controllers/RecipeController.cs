using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Project.Controllers
{ 
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RecipeController : ApiController
    {
      
        [HttpGet]
        public List <Recipe> Get()
        {
            return DB.RecipeList;
        }

       [HttpGet]
        public Recipe Get(int code)
        {
            return DB.RecipeList.FirstOrDefault(o => o.codeRecipe == code);
        }

       [HttpPost]
        public Recipe Add([FromBody] Recipe value)
        {
            DB.RecipeList.Add(value);
            return value;
        }

       [HttpPut]
        public Recipe Put(int code, [FromBody] Recipe value)
        {
            Recipe r = DB.RecipeList.FirstOrDefault(o => o.codeRecipe == code);
            if(r!=null)
            {
                if (value.nameRecipe != "")
                    r.nameRecipe = value.nameRecipe;
                if (value.codeCategory != default)
                    r.codeCategory = value.codeCategory;
                if (value.preparationTime != default)
                    r.preparationTime = value.preparationTime;
                if (value.levelDifficulty != default)
                    r.levelDifficulty = value.levelDifficulty;
                if (value.codeUser != default)
                    r.codeUser = value.codeUser;
                if (value.image != "")
                    r.image = value.image;
                if (value.dateAddRecipe != default(DateTime))
                    r.dateAddRecipe = value.dateAddRecipe;
                if (value.ingredients != null)
                    r.ingredients = value.ingredients;
                if (value.formPreparation != null)
                    r.formPreparation = value.formPreparation;
            }
            return r;
        }

        [HttpDelete]
        public Recipe Delete(int code)
        {
            Recipe r = DB.RecipeList.FirstOrDefault(o => o.codeRecipe == code);
            DB.RecipeList.Remove(r);
            foreach (Recipe item in DB.RecipeList)
            {
                item.codeRecipe = item.codeRecipe - 1;
            }
            return r;
        }
    }
}
