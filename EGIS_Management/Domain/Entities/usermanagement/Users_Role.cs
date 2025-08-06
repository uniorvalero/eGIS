using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_Role
    {
        [Key]
        public int Id { get; set; }
        public string RoleName { get; set; }
    }
}
