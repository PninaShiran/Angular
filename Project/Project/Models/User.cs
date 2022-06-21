using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project.Models
{
    public class User
    {
        public int codeUser { get; set; }
        public string nameUser { get; set; }
        public string addressUser { get; set; }
        public string mailUser { get; set; }
        public string password { get; set; }
    }
}