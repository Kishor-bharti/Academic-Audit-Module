using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StudentController : ControllerBase
{
    private readonly AppDbContext _context;

    public StudentController(AppDbContext context)
    {
        _context = context;
    }

    // POST: api/student
    [HttpPost]
    public async Task<IActionResult> AddStudent([FromBody] Student student)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        // Check duplicate StudentId
        var existingStudent = await _context.Students
            .FirstOrDefaultAsync(s => s.StudentId == student.StudentId);

        if (existingStudent != null)
        {
            return BadRequest("Student ID already exists.");
        }

        _context.Students.Add(student);
        await _context.SaveChangesAsync();

        return Ok(student);
    }

    // GET: api/student
    [HttpGet]
    public async Task<IActionResult> GetStudents()
    {
        var students = await _context.Students.ToListAsync();
        return Ok(students);
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStudent(int id)
    {
        var student = await _context.Students.FindAsync(id);

        if (student == null)
            return NotFound();

        _context.Students.Remove(student);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateStudent(int id, Student updatedStudent)
    {
        if (id != updatedStudent.Id)
            return BadRequest();

        var student = await _context.Students.FindAsync(id);

        if (student == null)
            return NotFound();

        student.StudentId = updatedStudent.StudentId;
        student.FullName = updatedStudent.FullName;
        student.Email = updatedStudent.Email;
        student.Department = updatedStudent.Department;
        student.Semester = updatedStudent.Semester;
        student.Year = updatedStudent.Year;
        student.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return Ok(student);
}



}
