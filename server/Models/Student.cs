using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Student
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string StudentId { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string FullName { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [MaxLength(100)]
    public string Email { get; set; } = string.Empty;

    [MaxLength(50)]
    public string Department { get; set; } = string.Empty;

    [MaxLength(20)]
    public string Semester { get; set; } = string.Empty;

    [MaxLength(20)]
    public string Year { get; set; } = string.Empty;

    public DateTime EnrollmentDate { get; set; } = DateTime.UtcNow;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
