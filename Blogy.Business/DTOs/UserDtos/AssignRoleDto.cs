using Blogy.Business.DTOs.Common;

namespace Blogy.Business.DTOs.UserDtos
{
    public class AssignRoleDto:BaseDto
    {
        public int RoleId { get; set; }
        public string RoleName{ get; set; }
        public bool RoleExists { get; set; }




    }
}
