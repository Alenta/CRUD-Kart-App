namespace CRUD_Kart_App;

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine(Environment.GetEnvironmentVariable("API_KEY"));
        //==============SERVER SETUP=============//
        var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        var builder = WebApplication.CreateBuilder(args);
        
        // Add services to the container.

        //Enable CORS
        builder.Services.AddCors(options =>
        {
            options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:5106", "http://127.0.0.1:5500") // Allow specific origins
                                 .AllowAnyHeader()
                                 .AllowAnyMethod()
                                 .AllowCredentials(); // Allow credentials if needed
                      });
        });
        builder.Services.AddControllers();

        //builder.Services.AddRazorPages();

        /*
        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }
        */
        var app = builder.Build();
        app.UseDefaultFiles();
        app.UseStaticFiles();
        
        //app.UseHttpsRedirection(); //<-- Gives warning for now. Needed?
        //app.UseRouting(); 
        app.UseCors(MyAllowSpecificOrigins);
        //app.UseAuthorization(); Dunno?
        //app.MapRazorPages(); Dunno?

        //====================END POINTS===================//
        app.MapGet("/health", () => "Server status: OK");

        //When a user inputs a search 
        app.MapGet("/maps/search/", () => "");

        //When a user clicks on a saved pin
        app.MapGet("/pin/", () => "");

        //When a user shows detailed info on pin
        app.MapGet("/pinDetailed/", () => "");

        //When a user creates a new pin
        app.MapPost("/newPin", () => "");

        //When a user deletes an old pin
        app.MapDelete("/deletePin", ()=> "");

        app.MapGet("/map-token", () => {
            return Environment.GetEnvironmentVariable("API_KEY");
        });

        app.MapGet("/test", () => "test");


        

        //=================RUN APP=============//
        app.Run();

    }

}
