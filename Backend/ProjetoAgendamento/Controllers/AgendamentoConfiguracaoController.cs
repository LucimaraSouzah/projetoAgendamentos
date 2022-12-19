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
    public class AgendamentoConfiguracaoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AgendamentoConfiguracaoController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/AgendamentoConfiguracao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AgendamentoConfiguracao>>> GetAgendamentoConfiguracaos()
        {
            return await _context.AgendamentoConfiguracaos.ToListAsync();
        }

        // GET: api/AgendamentoConfiguracao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AgendamentoConfiguracao>> GetAgendamentoConfiguracao(int id)
        {
            var agendamentoConfiguracao = await _context.AgendamentoConfiguracaos.FindAsync(id);

            if (agendamentoConfiguracao == null)
            {
                return NotFound();
            }

            return agendamentoConfiguracao;
        }

        // PUT: api/AgendamentoConfiguracao/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAgendamentoConfiguracao(int id, AgendamentoConfiguracao agendamentoConfiguracao)
        {
            if (id != agendamentoConfiguracao.IdConfiguracao)
            {
                return BadRequest();
            }

            _context.Entry(agendamentoConfiguracao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AgendamentoConfiguracaoExists(id))
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

        // POST: api/AgendamentoConfiguracao
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AgendamentoConfiguracao>> PostAgendamentoConfiguracao(AgendamentoConfiguracao agendamentoConfiguracao)
        {
            _context.AgendamentoConfiguracaos.Add(agendamentoConfiguracao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAgendamentoConfiguracao", new { id = agendamentoConfiguracao.IdConfiguracao }, agendamentoConfiguracao);
        }

        // DELETE: api/AgendamentoConfiguracao/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAgendamentoConfiguracao(int id)
        {
            var agendamentoConfiguracao = await _context.AgendamentoConfiguracaos.FindAsync(id);
            if (agendamentoConfiguracao == null)
            {
                return NotFound();
            }

            _context.AgendamentoConfiguracaos.Remove(agendamentoConfiguracao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AgendamentoConfiguracaoExists(int id)
        {
            return _context.AgendamentoConfiguracaos.Any(e => e.IdConfiguracao == id);
        }
    }
}
