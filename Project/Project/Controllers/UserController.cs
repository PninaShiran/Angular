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
    public class UserController : ApiController
    {

        [HttpGet]
        public IHttpActionResult Get(string name)
        {
            User user = DB.UserList.FirstOrDefault(o => o.nameUser == name);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public User Add([FromBody] User value)
        {
            value.codeUser = DB.UserList.Count + 1;
            DB.UserList.Add(value);
            return value;
        }

      
    }
}
