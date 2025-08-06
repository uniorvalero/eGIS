using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_AppRoles
    {
        [Key]
        public int Id { get; set; }
        public int RoleId { get; set; }
        public int AppId { get; set; }
        public ICollection<Users_App> Apps { get; set; }
        public ICollection<Users_Role> Roles { get; set; }
    }
}
