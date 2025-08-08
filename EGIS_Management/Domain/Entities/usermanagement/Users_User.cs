using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string MiddleName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string ContactNo { get; set; } = string.Empty;
        public int Age { get; set; }
        public DateOnly BirthDay { get; set; }
        public string Gender { get; set; }
        public string Status { get; set; }
        public bool IsVerified { get; set; } = false;
        public int LoginId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
