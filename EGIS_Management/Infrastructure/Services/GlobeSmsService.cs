using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class GlobeSmsService : IGlobeSmsService
    {
        public async Task SendOtpAsync(string mobile, string code)
        {
            // TODO: Integrate with Globe SMS API
            await Task.CompletedTask;
        }
    }
}
