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
        public string Firstname { get; set; } = string.Empty;
        public string Middlename { get; set; } = string.Empty;
        public string Lastname { get; set; } = string.Empty;
        public string ContactNo { get; set; } = string.Empty;
        public int Age { get; set; }
        public DateOnly BirthDaay { get; set; }
        public string Gender { get; set; }
        public string Status { get; set; }
        public bool IsVerifed { get; set; } = false;
        public int LoginId { get; set; }
        [NotMapped]
        public Blob ProfilePic { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
