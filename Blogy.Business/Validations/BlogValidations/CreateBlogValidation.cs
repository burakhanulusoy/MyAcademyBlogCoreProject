using Blogy.Business.DTOs.BlogDtos;
using FluentValidation;

namespace Blogy.Business.Validations.BlogValidations
{
    public class CreateBlogValidation:AbstractValidator<CreateBlogDto>
    {
        public CreateBlogValidation()
        {
            RuleFor(x=>x.Title).NotEmpty().WithMessage("Baþlýk boþ geçilemez")
                               .MaximumLength(50).WithMessage("Baþlýk en fazla 50 karakter olabilir")
                               .MinimumLength(5).WithMessage("Baþlýk en az 5 karakter olabilir");

            RuleFor(x => x.Description).NotEmpty().WithMessage("Açýklama boþ geçilemez")
                                      .MinimumLength(20).WithMessage("Açýklama en az 20 karakter olabilir");
                                      
                                      

            RuleFor(x=>x.CoverImage).NotEmpty().WithMessage("Ana Fotoðraf boþ geçilemez");
            RuleFor(x=>x.BlogImage1).NotEmpty().WithMessage("1. Alt Fotoðraf boþ geçilemez");
            RuleFor(x=>x.BlogImage2).NotEmpty().WithMessage("2. Alt Fotoðraf boþ geçilemez");

            RuleFor(x => x.CategoryId).NotEmpty().WithMessage("Kategori boþ geçilemez");

        }
    }
}
