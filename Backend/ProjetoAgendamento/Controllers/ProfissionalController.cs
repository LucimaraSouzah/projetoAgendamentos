using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoAgendamento.Database;

namespace ProjetoAgendamento.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfissionalController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProfissionalController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Profissional
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Profissional>>> GetProfissionals()
        {
            return await _context.Profissionals.ToListAsync();
        }

        // GET: api/Profissional/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Profissional>> GetProfissional(int id)
        {
            var profissional = await _context.Profissionals.FindAsync(id);

            if (profissional == null)
            {
                return NotFound();
            }

            return profissional;
        }

        // PUT: api/Profissional/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProfissional(int id, Profissional profissional)
        {
            if (id != profissional.IdProfissional)
            {
                return BadRequest();
            }

            _context.Entry(profissional).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfissionalExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Profissional
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Profissional>> PostProfissional(Profissional profissional)
        {
            _context.Profissionals.Add(profissional);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfissional", new { id = profissional.IdProfissional }, profissional);
        }

        // DELETE: api/Profissional/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfissional(int id)
        {
            var profissional = await _context.Profissionals.FindAsync(id);
            if (profissional == null)
            {
                return NotFound();
            }

            _context.Profissionals.Remove(profissional);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProfissionalExists(int id)
        {
            return _context.Profissionals.Any(e => e.IdProfissional == id);
        }
    }
}
