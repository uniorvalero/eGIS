using System.ComponentModel.DataAnnotations;

namespace Domain.Entities.toims
{
    public class OfficialReceipt
    {
        [Key] public int Id { get; set; }
        public DateTime DateIssued { get; set; }
        public string FormCode { get; set; }
        public string ReceiptNumber { get; set; }
        public string Character { get; set; }
        public string BookNumber { get; set; }
        public string Payor { get; set; }
        public string Particular { get; set; }
        public string Remarks { get; set; }
        public ICollection<OfficialReceiptDetail> Details { get; set; }
    }
}
