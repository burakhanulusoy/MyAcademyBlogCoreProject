using Blogy.Business.Extensions;
using Blogy.DataAccess.Extensions;
using Blogy.WebUI.Filters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container. IOC Container settings

builder.Services.AddServiceExtensions();
builder.Services.AddRepositoriesExtension(builder.Configuration);


builder.Services.AddControllersWithViews(options=>
{
    options.Filters.Add<ValidationExceptionFilter>();
});


builder.Services.ConfigureApplicationCookie(options =>
{
    options.LoginPath = "/Login/Index"; 
    options.AccessDeniedPath = "/Account/AccessDenied"; 
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication(); 
app.UseAuthorization();


app.MapControllerRoute(
        name: "areas",
        pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
      );



app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
