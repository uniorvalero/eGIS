using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CashTicketController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public CashTicketController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var tickets = await _unitOfWork.CashTicket.GetAllAsync();
            return Ok(tickets);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var ticket = await _unitOfWork.CashTicket.GetById(id);
            if (ticket == null)
                return NotFound();
            return Ok(ticket);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] CashTicket cashTicket)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Check for duplicate Subcode
                var isDuplicate = await _unitOfWork.CashTicket.IsCodeDuplicateAsync(cashTicket.ControlNumber);
                if (isDuplicate)
                {
                    return BadRequest("Duplicate Code: A record with the same ControlNumber already exists.");
                }

                await _unitOfWork.CashTicket.CreateAsync(cashTicket);
                await _unitOfWork.CommitAsync();
                return Ok();
            }
            catch (DbUpdateException ex) when (ex.InnerException?.Message.Contains("UNIQUE") == true)
            {
                return BadRequest("Duplicate Code: A record with the same ControlNumber already exists.");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] CashTicket updatedTicket)
        {
            var ticket = await _unitOfWork.CashTicket.GetById(id);
            if (ticket == null)
                return NotFound();

            ticket.ControlNumber = updatedTicket.ControlNumber;
            ticket.Quantity = updatedTicket.Quantity;
            ticket.Amount = updatedTicket.Amount;
            ticket.TellerCode = updatedTicket.TellerCode;
            ticket.TellerName = updatedTicket.TellerName;
            //var tellerName = (await _unitOfWork.Teller.GetAllAsync())
            //    .FirstOrDefault(t => t.Code == updatedTicket.TellerCode)?.Name;

            //if (tellerName == null)
            //    return BadRequest("Invalid TellerCode.");

            //ticket.TellerName = tellerName;

            _unitOfWork.CashTicket.Update(ticket);
            await _unitOfWork.CommitAsync();
            return Ok(ticket);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var ticket = await _unitOfWork.CashTicket.GetById(id);
            if (ticket == null)
                return NotFound();

            await _unitOfWork.CashTicket.DeleteAsync(ticket);
            await _unitOfWork.CommitAsync();
            return Ok();
        }
    }
}
