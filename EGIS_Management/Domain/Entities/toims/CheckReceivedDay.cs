using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class CheckReceivedDay
    {
        [Key] public int Id { get; set; }
        public int ReceiptNumber { get; set; }
        public int BankNumber { get; set; }
        public string BankName { get; set; }
        public int CheckNumber { get; set; }
        public double CheckAmount { get; set; }
        public DateOnly CheckDate { get; set; }
        public DateTime CreateAt { get; set; }
    }
}
