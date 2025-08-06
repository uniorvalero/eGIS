using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_Captcha
    {
        [Key]
        public int Id { get; set; }
        public string CaptchaCode { get; set; } = string.Empty;
        public DateTime GeneratedAt { get; set; } = DateTime.Now;
        public bool IsUsed { get; set; } = false;
        public int LoginId { get; set; }
    }
}
