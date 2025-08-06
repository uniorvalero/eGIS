namespace TOIMS.API.Models
{
    public class OtpVerifyRequest
    {
        public int OtpTokenId { get; set; }
        public string Code { get; set; }
    }
}