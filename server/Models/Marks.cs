using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Marks
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int StudentId { get; set; }

    [Required]
    public int CourseId { get; set; }

    [Required]
    [MaxLength(50)]
    public string ExamType { get; set; } = string.Empty; // Internal, External, Assignment

    [Range(0, 100)]
    public decimal MarksObtained { get; set; }

    [Range(0, 100)]
    public decimal MaxMarks { get; set; }

    [MaxLength(20)]
    public string Semester { get; set; } = string.Empty;

    [MaxLength(20)]
    public string Year { get; set; } = string.Empty;

    public DateTime ExamDate { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
