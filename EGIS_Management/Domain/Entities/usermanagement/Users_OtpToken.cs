using Domain.Entities.rptas;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_OtpToken
    {
        [Key]
        public int Id { get; set; }
        public int LoginId { get; set; }
        public string Code { get; set; }
        public DateTime Expiry { get; set; }
        public bool IsUsed { get; set; }
    }
}
