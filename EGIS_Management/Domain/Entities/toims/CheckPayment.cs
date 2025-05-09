using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class CheckPayment
    {
        [Key] public int Id { get; set; }
        public string CheckNumber { get; set; }
        public string BankName { get; set; }
        public DateTime CheckDate { get; set; }
        public decimal Amount { get; set; }
    }

}
