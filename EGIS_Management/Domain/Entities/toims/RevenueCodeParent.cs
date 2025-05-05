using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class RevenueCodeParent
    {
        [Key]
        public int Id { get; set; }
        public int SeqNo { get; set; }
        public string Kind { get; set; } = string.Empty;
        public string Code { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
