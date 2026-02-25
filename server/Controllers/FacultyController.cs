using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class FacultyController : ControllerBase
{
    private readonly AppDbContext _context;

    public FacultyController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Faculty>>> GetFaculties()
    {
        return await _context.Faculties.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Faculty>> AddFaculty(Faculty faculty)
    {
        _context.Faculties.Add(faculty);
        await _context.SaveChangesAsync();
        return Ok(faculty);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateFaculty(int id, Faculty updatedFaculty)
    {
        if (id != updatedFaculty.Id)
            return BadRequest();

        var faculty = await _context.Faculties.FindAsync(id);

        if (faculty == null)
            return NotFound();

        faculty.FacultyId = updatedFaculty.FacultyId;
        faculty.FullName = updatedFaculty.FullName;
        faculty.Email = updatedFaculty.Email;
        faculty.Department = updatedFaculty.Department;
        faculty.Designation = updatedFaculty.Designation;
        faculty.Specialization = updatedFaculty.Specialization;
        faculty.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return Ok(faculty);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteFaculty(int id)
    {
        var faculty = await _context.Faculties.FindAsync(id);

        if (faculty == null)
            return NotFound();

        _context.Faculties.Remove(faculty);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}