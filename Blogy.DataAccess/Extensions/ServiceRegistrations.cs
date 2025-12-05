using Blogy.Business.Validations.UserValidations;
using Blogy.DataAccess.Context;
using Blogy.DataAccess.Repositories.BlogRepositories;
using Blogy.DataAccess.Repositories.BlogTagRepositories;
using Blogy.DataAccess.Repositories.CategoryRepositories;
using Blogy.DataAccess.Repositories.CommentRepositories;
using Blogy.Entity.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Scrutor;
using System.Reflection;

namespace Blogy.DataAccess.Extensions  
{
    public static class ServiceRegistrations
    {
        public static void AddRepositoriesExtension(this IServiceCollection services,IConfiguration configuration)
        {
            
            
            services.Scan(options =>
            {
                options.FromAssemblies(Assembly.GetExecutingAssembly()) //bu katman içinde ara
                       .AddClasses(publicOnly: false)
                       .UsingRegistrationStrategy(registrationStrategy: RegistrationStrategy.Skip)
                       .AsMatchingInterface()
                       .AsImplementedInterfaces()
                       .WithScopedLifetime();



            });
   
            services.AddDbContext<AppDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("SqlConnection"));
                options.UseLazyLoadingProxies();

            });


            services.AddIdentity<AppUser, AppRole>(options =>
            {
                //options.Password.RequireDigit = true;
                //options.Password.RequireLowercase = true;
                //options.Password.RequireUppercase = true;
                //options.Password.RequireNonAlphanumeric = true;
                options.Password.RequiredLength = 6;
                options.User.RequireUniqueEmail = true;

                //options.Lockout.MaxFailedAccessAttempts=5;//5 kere hatalý giriþte kilitler
                //options.Lockout.DefaultLockoutTimeSpan=TimeSpan.FromMinutes(15);//15 dk kilitli kalýr
                //options.Lockout.AllowedForNewUsers=true;// yeni kullanýcýlar için kilitleme aktif 

            }).AddEntityFrameworkStores<AppDbContext>()
            .AddErrorDescriber<CustomErrorDescriber>();




        }


    }
}
