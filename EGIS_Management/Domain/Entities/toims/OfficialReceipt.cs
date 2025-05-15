using System.ComponentModel.DataAnnotations;

namespace Domain.Entities.toims
{
    public class OfficialReceipt
    {
        [Key] public int Id { get; set; }
        public int ReceiptNumber { get; set; }
        public string Char { get; set; }
        public string Payor { get; set; }
        public  DateTime DateIssue { get; set; } =  DateTime.Now;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
