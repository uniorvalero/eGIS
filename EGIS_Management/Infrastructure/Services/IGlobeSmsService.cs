using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public interface IGlobeSmsService
    {
        Task SendOtpAsync(string mobile, string code);
    }
}
