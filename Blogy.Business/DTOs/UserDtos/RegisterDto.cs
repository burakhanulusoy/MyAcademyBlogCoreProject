using System.ComponentModel.DataAnnotations;

namespace Blogy.Business.DTOs.UserDtos
{
    public class RegisterDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public string ConfirmPassword { get; set; }
        public string UserName { get; set; }






    }
}
