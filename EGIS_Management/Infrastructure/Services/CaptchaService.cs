using System;

namespace Infrastructure.Services
{
    public class CaptchaService : ICaptchaService
    {
        public string Generate()
        {
            // Simple random captcha code
            var random = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var captcha = new string(Enumerable.Repeat(chars, 6)
                .Select(s => s[random.Next(s.Length)]).ToArray());
            return captcha;
        }
    }
}
