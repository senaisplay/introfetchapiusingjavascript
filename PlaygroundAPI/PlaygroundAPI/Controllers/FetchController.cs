using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlaygroundAPI.Infrastructure;
using PlaygroundAPI.Model;

namespace PlaygroundAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FetchController : ControllerBase
    {
        public static List<User> Users { get; }

        static FetchController()
        {
            Users = new List<User>();
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Users.ToArray());
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            Users.Add(user);
            return Ok();
        }
    }
}