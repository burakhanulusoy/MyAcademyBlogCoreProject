using Blogy.Entity.Entities;
using FluentValidation;

namespace Blogy.Business.Validations
{
    public class SocialMediaValidator:AbstractValidator<SocialMedia>
    {

        public SocialMediaValidator()
        {

            RuleFor(x => x.Name).NotEmpty().WithMessage("Sosyal medya adý boþ býrakýlamaz *");
            RuleFor(x => x.Url).NotEmpty().WithMessage("Sosyal medya linki boþ býrakýlamaz *");
            RuleFor(x => x.Icon).NotEmpty().WithMessage("Sosyal medya iconu boþ býrakýlamaz *");



        }


    }
}
