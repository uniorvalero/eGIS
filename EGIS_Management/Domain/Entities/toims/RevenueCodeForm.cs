 using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class RevenueCodeForm
    {
        [Key]
        public int Id { get; set; }
        public string Code { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Forms { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
