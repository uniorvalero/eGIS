using System.ComponentModel.DataAnnotations;

namespace Domain.Entities.login
{
    public class Login
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
