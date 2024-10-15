using System.Text.Json; // For JSON serialization and deserialization
using Microsoft.AspNetCore.Http;
namespace CRUD_Kart_App;
public class GeocodeResponse
{
    public string? Status { get; set; }
    public Result[] Results { get; set; }
}

public class Result
{
    public Geometry Geometry { get; set; }
}

public class Geometry
{
    public Location Location { get; set; }
}

public class Location
{
    public double Lat { get; set; } // Latitude
    public double Lng { get; set; } // Longitude
}
