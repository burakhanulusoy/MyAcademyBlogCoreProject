using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blogy.Business.DTOs.UserDtos
{
    public class ChangePasswordDto
    {
        public string CurrentPassword { get; set; }
        public string NewPassword { get; set; }

        [Compare(nameof(NewPassword),ErrorMessage ="Þifreler birbiri ile uyumlu deðil!")]
        public string ConfirmPassword { get; set; }

    }
}
