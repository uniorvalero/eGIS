using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities.toims
{
    public class OfficialReceipt
    {
        [Key] public int Id { get; set; }
        public int ReceiptNumber { get; set; }
        public int SubCode { get; set; }
        public string Char { get; set; }
        public string Payor { get; set; }
        public  DateOnly DateIssue { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
