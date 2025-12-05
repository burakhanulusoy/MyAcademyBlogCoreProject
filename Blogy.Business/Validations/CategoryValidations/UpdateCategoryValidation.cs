using Blogy.Business.DTOs.CategoryDtos;
using Blogy.DataAccess.Repositories.CategoryRepositories;
using FluentValidation;

namespace Blogy.Business.Validations.CategoryValidations
{
    public class UpdateCategoryValidation:AbstractValidator<UpdateCategoryDto>
    {
        protected readonly ICategoryRepository _categoryRepository;

        public UpdateCategoryValidation(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;



            RuleFor(x => x.Name).NotEmpty().WithMessage("Kategori adý boþ býrakýlamaz !");
            RuleFor(x => x.Name).MaximumLength(40).WithMessage("Kategori adý en fazla 40 karakter olabilir !");
            RuleFor(x => x.Name).MinimumLength(3).WithMessage("Kategori adý en az 3 karakter olabilir !");

            RuleFor(x => x.CategoryImage).NotEmpty().WithMessage("Kategori Fotoðraf Url Boþ Geçilemez!");












        }
    }
}
