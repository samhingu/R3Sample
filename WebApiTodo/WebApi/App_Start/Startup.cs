using Microsoft.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler.Encoder;
using Microsoft.Owin.Security.Jwt;
using Owin;
using System.Web.Http;
using WebConfigurationManager = System.Web.Configuration.WebConfigurationManager;

[assembly: OwinStartup(typeof(WebApi.App_Start.Startup))]
//[assembly: OwinStartup("Brand", typeof(WebApi.App_Start.Startup))]

namespace WebApi.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var issuer = WebConfigurationManager.AppSettings["Auth0Domain"];
            var audience = WebConfigurationManager.AppSettings["Auth0ClientID"];
            var secret = TextEncodings.Base64Url.Decode(WebConfigurationManager.AppSettings["Auth0ClientSecret"]);

            app.UseJwtBearerAuthentication(new JwtBearerAuthenticationOptions
            {
                AuthenticationMode = AuthenticationMode.Active,
                AllowedAudiences = new[] { audience },
                IssuerSecurityTokenProviders = new IIssuerSecurityTokenProvider[]{
                    new SymmetricKeyIssuerSecurityTokenProvider(issuer,secret)
                }
            });

            HttpConfiguration configuration = new HttpConfiguration();

            configuration.MapHttpAttributeRoutes();

            WebApiConfig.Register(configuration);
        }
    }
}