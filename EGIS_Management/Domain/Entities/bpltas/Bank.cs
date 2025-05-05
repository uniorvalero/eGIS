using System.ComponentModel.DataAnnotations;

namespace Domain.Entities.bpltas
{
    public class Bank
    {
        [Key]
        public int Id { get; set; }
        public string BankName { get; set; } = string.Empty;
        public string BankCode { get; set; } = string.Empty;
        public string Branch { get; set; } = string.Empty;
        public string ContactName { get; set; } = string.Empty;
        public string ContactNo { get; set; } = string.Empty;
        public string? Address { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
