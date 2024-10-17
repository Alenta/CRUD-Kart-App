using _namespace = System.Configuration;
using Microsoft.JSInterop;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_Kart_App;

public class APIManager
{
    [JSInvokable("APIKey")]
    public static string APIKey()
    {
        return _namespace.ConfigurationManager.AppSettings["APIKey"];
    }
}
