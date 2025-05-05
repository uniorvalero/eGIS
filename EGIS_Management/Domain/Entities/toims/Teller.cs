using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class Teller
    {
        [Key]
        public int Id { get; set; }
        public string UserId { get; set; } = string.Empty;
        public int Code { get; set; }
        public string Name { get; set; }
        public string Designation { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;

    }
}
