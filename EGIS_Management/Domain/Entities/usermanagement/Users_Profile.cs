
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities.usermanagement
{
    public class Users_Profile
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int UserRoleId { get; set; }
        public int AddressId { get; set; }
        public int LoginId { get; set; }
        public int OTPId { get; set; }
        public ICollection<Users_UserRole> UserRoles { get; set; }
    }
}
