using Blogy.Business.DTOs.CategoryDtos;
using Blogy.DataAccess.Repositories.CategoryRepositories;
using FluentValidation;
using System.Xml.Schema;

namespace Blogy.Business.Validations.CategoryValidations
{
    public class CreateCategoryValidation:AbstractValidator<CreateCategoryDto>
    {

       

        public CreateCategoryValidation()
        {
            

            RuleFor(x => x.Name).NotEmpty().WithMessage("Kategori adý boþ býrakýlamaz !");
            RuleFor(x => x.Name).MaximumLength(40).WithMessage("Kategori adý en fazla 40 karakter olabilir !");
            RuleFor(x => x.Name).MinimumLength(3).WithMessage("Kategori adý en az 3 karakter olabilir !");
            RuleFor(x => x.CategoryImage).NotEmpty().WithMessage("Kategori Fotoðraf Url Boþ Geçilemez!");
           







        }
    }
}
