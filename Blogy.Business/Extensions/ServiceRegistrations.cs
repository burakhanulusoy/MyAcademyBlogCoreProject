using Blogy.Business.Mappings;
using Blogy.Business.Services;
using Blogy.Business.Services.BlogServices;
using Blogy.Business.Services.CategoryServices;
using Blogy.Business.Services.CommentServices;
using Blogy.Business.Validations.CategoryValidations;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;
using Scrutor;
using System.Reflection;

namespace Blogy.Business.Extensions
{
    public static class ServiceRegistrations
    {

        public static void AddServiceExtensions(this IServiceCollection services)
        {
            services.Scan(options =>
            {


                options.FromAssemblies(Assembly.GetExecutingAssembly()) //bu katman içinde ara
                       .AddClasses(publicOnly: false)//claslara bak eklenecek sadece public olmasýn diyoruz
                       .UsingRegistrationStrategy(registrationStrategy: RegistrationStrategy.Skip)//çakýþma durumda nolsun , direk atlasýn
                       .AsMatchingInterface()//class ve inretface adý benzerliðine gore yap
                       .AsImplementedInterfaces()
                       .WithScopedLifetime();



            });








            services.AddAutoMapper(typeof(CategoryMappings).Assembly);


            services.AddFluentValidationAutoValidation()
                .AddFluentValidationClientsideAdapters()
                .AddValidatorsFromAssembly(typeof(UpdateCategoryValidation).Assembly);



        }


    }
}
