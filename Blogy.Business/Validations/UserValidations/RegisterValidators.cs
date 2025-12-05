using Blogy.Business.DTOs.UserDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blogy.Business.Validations.UserValidations
{
    public class RegisterValidators:AbstractValidator<RegisterDto>
    {

        public RegisterValidators()
        {
            RuleFor(x=>x.FirstName).NotEmpty().WithMessage("Adýnýzý boþ geçemezsiniz.")
                                   .MaximumLength(50).WithMessage("Adýnýz en fazla 50 karakter olabilir.")
                                   .MinimumLength(2).WithMessage("Adýnýz en az 2 karakter olabilir.");

            RuleFor(x=>x.LastName).NotEmpty().WithMessage("Soyadýnýzý boþ geçemezsiniz.")
                                    .MaximumLength(50).WithMessage("Soyadýnýz en fazla 50 karakter olabilir.")
                                    .MinimumLength(2).WithMessage("Soyadýnýz en az 2 karakter olabilir.");

            RuleFor(x=>x.UserName).NotEmpty().WithMessage("Kullanýcý adýnýzý boþ geçemezsiniz.")
                                    .MaximumLength(20).WithMessage("Kullanýcý adýnýz en fazla 20 karakter olabilir.")
                                    .MinimumLength(5).WithMessage("Kullanýcý adýnýz en az 5 karakter olabilir.");

            RuleFor(x=>x.Email).NotEmpty().WithMessage("Email adresinizi boþ geçemezsiniz.")
                                    .EmailAddress().WithMessage("Lütfen geçerli bir email adresi giriniz.")
                                    .MaximumLength(100).WithMessage("Email adresiniz en fazla 100 karakter olabilir.");

            RuleFor(x => x.Password).NotEmpty().WithMessage("Parolanýzý boþ geçemezsiniz.")
                                    .MinimumLength(6).WithMessage("Parolanýz en az 6 karakter olabilir.")
                                    .MaximumLength(20).WithMessage("Parolanýz en fazla 20 karakter olabilir.");
                                    




            RuleFor(x => x.ConfirmPassword).NotEmpty().WithMessage("Parola doðrulamasýný boþ geçemezsiniz.")
                                    .Equal(x => x.Password).WithMessage("Parola doðrulamasý parolanýzla eþleþmiyor.");






        }



    }
}
