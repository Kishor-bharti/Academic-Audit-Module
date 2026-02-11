using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Course
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string CourseCode { get; set; } = string.Empty;

    [Required]
    [MaxLength(200)]
    public string CourseName { get; set; } = string.Empty;

    [MaxLength(50)]
    public string Department { get; set; } = string.Empty;

    [MaxLength(20)]
    public string Semester { get; set; } = string.Empty;

    public int Credits { get; set; }

    [MaxLength(500)]
    public string Description { get; set; } = string.Empty;

    public int? FacultyId { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
