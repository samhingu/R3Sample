using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class LoginController : ApiController
    {
        public class LoginBindingModel
        {
            public string Username;
            public string Password;
        }

        [Route("login")]
        [HttpPost]
        public HttpResponseMessage Login(LoginBindingModel login)
        {
            if (login.Username == "admin" && login.Password == "password")  //Do real auth
            {
                string role = "Librarian";
                var jwtToken = Security.TokenManager.CreateJwtToken(login.Username, role);

                return new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new ObjectContent<object>(new
                    {
                        UserName = login.Username,
                        Roles = role,
                        AccessToken = jwtToken
                    }, Configuration.Formatters.JsonFormatter)
                };
            }
            return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }
    }
}