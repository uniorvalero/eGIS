using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_AppSubcription
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int AppId { get; set; }
        public DateTime SubscribedOn { get; set; } = DateTime.UtcNow;
    }
}
