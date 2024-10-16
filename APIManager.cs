using namespc = System.Configuration;
using Microsoft.JSInterop;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_Kart_App;

public class APIManager
{
    [JSInvokable("MyMethod")]
    public static string APIKey()
    {
        return namespc.ConfigurationManager.AppSettings["APIKey"];
    }
}
