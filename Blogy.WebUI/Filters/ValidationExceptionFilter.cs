using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Blogy.WebUI.Filters
{
    public class ValidationExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
           

            if(context.Exception is not  ValidationException validExpt )
            {
                return;
            }

            foreach(var error in validExpt.Errors)
            {
                context.ModelState.AddModelError(error.PropertyName, error.ErrorMessage);
            }

            var actionName=context.RouteData.Values["action"].ToString();
            context.Result=new ViewResult { ViewName = actionName };
            context.ExceptionHandled=true;



        }
    }
}
