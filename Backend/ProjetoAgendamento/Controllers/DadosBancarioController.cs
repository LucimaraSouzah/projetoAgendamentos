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
    public class DadosBancarioController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DadosBancarioController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/DadosBancario
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DadosBancario>>> GetDadosBancarios()
        {
            return await _context.DadosBancarios.ToListAsync();
        }

        // GET: api/DadosBancario/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DadosBancario>> GetDadosBancario(int id)
        {
            var dadosBancario = await _context.DadosBancarios.FindAsync(id);

            if (dadosBancario == null)
            {
                return NotFound();
            }

            return dadosBancario;
        }

        // PUT: api/DadosBancario/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDadosBancario(int id, DadosBancario dadosBancario)
        {
            if (id != dadosBancario.IdDadosBancarios)
            {
                return BadRequest();
            }

            _context.Entry(dadosBancario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DadosBancarioExists(id))
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

        // POST: api/DadosBancario
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DadosBancario>> PostDadosBancario(DadosBancario dadosBancario)
        {
            _context.DadosBancarios.Add(dadosBancario);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDadosBancario", new { id = dadosBancario.IdDadosBancarios }, dadosBancario);
        }

        // DELETE: api/DadosBancario/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDadosBancario(int id)
        {
            var dadosBancario = await _context.DadosBancarios.FindAsync(id);
            if (dadosBancario == null)
            {
                return NotFound();
            }

            _context.DadosBancarios.Remove(dadosBancario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DadosBancarioExists(int id)
        {
            return _context.DadosBancarios.Any(e => e.IdDadosBancarios == id);
        }
    }
}
