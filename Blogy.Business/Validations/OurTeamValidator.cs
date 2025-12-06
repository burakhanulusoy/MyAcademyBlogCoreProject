using Blogy.Entity.Entities;
using FluentValidation;

namespace Blogy.Business.Validations
{
    public class OurTeamValidator:AbstractValidator<OurTeam>
    {

        public OurTeamValidator()
        {

            RuleFor(x => x.ImgUrl).NotEmpty().WithMessage("Resim Url boþ geçilemez*");
            RuleFor(x => x.Name).NotEmpty().WithMessage("Ýsim  boþ geçilemez*");
            RuleFor(x => x.WhatDoYouDo).NotEmpty().WithMessage("Ne yapýyor kýsýmý boþ geçilemez*")
                                      .MinimumLength(10).WithMessage("minumum 10 karakter girmelisiniz*");


        }


    }
}
