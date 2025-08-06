using System.ComponentModel.DataAnnotations;

namespace Domain.Entities.bpltas
{
    public class BPLTASBanks
    {
        [Key]
        public int Id { get; set; }
        public string BankName { get; set; } = string.Empty;
        public string BankCode { get; set; } = string.Empty;
        public string Branch { get; set; } = string.Empty;
        public string? Address { get; set; }
    }
}
