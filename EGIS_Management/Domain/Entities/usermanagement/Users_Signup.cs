using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_Signup
    {
        public int Id { get; set; }
        public Users_Login LoginDetails { get; set; }
        public Users_OtpToken OTPDetails { get; set; } 
    }
}
