using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project.Models
{
    public class Recipe
    {
        public static int Counter { get; set; } = 1;
        public int codeRecipe { get; set; } = Counter;
        public string nameRecipe { get; set; }
        public int codeCategory { get; set; }
        public int preparationTime { get; set; }
        public int levelDifficulty { get; set; }
        public int codeUser { get; set; }
        public string image { get; set; }
        public DateTime dateAddRecipe { get; set; } = new DateTime();
        public List<string> ingredients { get; set; } = new List<string>();
        public List<string> formPreparation { get; set; } = new List<string>();

        public Recipe()
        {
            Counter++;
        }
    }
}