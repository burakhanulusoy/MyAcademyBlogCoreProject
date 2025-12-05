using Blogy.Entity.Entities;
using FluentValidation;

namespace Blogy.Business.Validations
{
    public class CommentValidator:AbstractValidator<Comment>
    {
        public CommentValidator()
        {
            RuleFor(x => x.UserId).NotEmpty().WithMessage("Kullanýcý boþ býrakýlamaz !");
            RuleFor(x => x.BlogId).NotEmpty().WithMessage("Blog adý boþ býrakýlamaz !");
            RuleFor(x => x.Content).NotEmpty().WithMessage("Yorum bölümü boþ býrakýlamaz !")
                                   .MinimumLength(10).WithMessage("Yorum uzunluðu 10 karakterden fazla olmak zorundadýr.")
                                   .MaximumLength(250).WithMessage("Yorum uzunluðu 250 karakterden az olmak zorundadýr.");





        }


    }
}
