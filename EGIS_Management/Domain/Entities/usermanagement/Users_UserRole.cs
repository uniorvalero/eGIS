using Domain.Entities.rptas;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_UserRole
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }
        public ICollection<Users_Role> Roles { get; set; }
        public ICollection<Users_User> Users { get; set; }
    }
}
