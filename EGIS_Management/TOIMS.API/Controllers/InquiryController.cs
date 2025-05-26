using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    public class InquiryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
