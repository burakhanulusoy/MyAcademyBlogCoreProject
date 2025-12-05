using Microsoft.AspNetCore.Identity;

namespace Blogy.Business.Validations.UserValidations
{
    public class CustomErrorDescriber:IdentityErrorDescriber
    {
        public override IdentityError PasswordTooShort(int length)
        {
            return new IdentityError()
            {
                Code = "PasswordTooShort",
                Description = $"Þifre en az {length} karakter olmalý"
            };
        }
        public override IdentityError PasswordRequiresDigit()
        {
            return new IdentityError()
            {
                Code = "PasswordRequiresDigit",
                Description = "Þifre en az 1 tane sayý{1,2,3,4,5...} içermeli"
            };
        }
        public override IdentityError PasswordRequiresLower()
        {
            return new IdentityError()
            {
                Code = "PasswordRequiresLower",
                Description = "Þifre en az 1 tane küçük harf{'a'-'z'} içermeli"
            };
        }
        public override IdentityError PasswordRequiresUpper()
        {
            return new IdentityError()
            {
                Code = "PasswordRequiresUpper",
                Description = "Þifre en az 1 tane büyük harf{'A'-'Z'} içermeli"
            };
        }
        public override IdentityError PasswordRequiresNonAlphanumeric()
        {
            return new IdentityError()
            {
                Code = "PasswordRequiresNonAlphanumeric",
                Description = "Þifre en az 1 tane sembol{*,+,-...} içermeli"
            };
        }

        public override IdentityError DuplicateEmail(string email)
        {
            return new IdentityError()
            {
                Code = "DuplicateEmail",
                Description = $"{email} adresi zaten kayýtlý.Lütfen farklý bir e-mail ile kaydolunuz."
            };
        }
        override public IdentityError DuplicateUserName(string userName)
        {
            return new IdentityError()
            {
                Code = "DuplicateUserName",
                Description = $"{userName} kullanýcý adý zaten kayýtlý.Lütfen farklý bir kullanýc adý ile kaydolunuz."
            };
        }

        public override IdentityError DuplicateRoleName(string role)
        {

            return new IdentityError()
            {
                Code = "DuplicateRoleName",
                Description = $"{role} adý rol zaten mevcut. Lütfen farklý bir rol adý giriniz."
            };

        }
        public override IdentityError PasswordMismatch()
        {
            return new IdentityError()
            {
                Code = "PasswordMismatch",
                Description = "Mevcut þifreniz yanlýþ!"
            };
        }
        public override IdentityError InvalidRoleName(string? role)
        {
            return new IdentityError()
            {

                Code = "InvalidRoleName",
                Description = "Rol adýný kontrol ediniz!"

            };
        }


    }
}
