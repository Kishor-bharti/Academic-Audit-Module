using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models;

[Table("Marks")]
public class Marks
{
    [Key]
    [Column("id")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    [Column("student_id")]
    public int StudentId { get; set; }

    [Required]
    [Column("course_id")]
    public int CourseId { get; set; }

    [Required]
    [MaxLength(50)]
    [Column("exam_type")]
    public string ExamType { get; set; } = string.Empty;

    [Range(0, 100)]
    [Column("marks_obtained")]
    public decimal MarksObtained { get; set; }

    [Range(0, 100)]
    [Column("max_marks")]
    public decimal MaxMarks { get; set; }

    [MaxLength(20)]
    [Column("semester")]
    public string Semester { get; set; } = string.Empty;

    [MaxLength(20)]
    [Column("year")]
    public string Year { get; set; } = string.Empty;

    [Column("exam_date")]
    public DateTime ExamDate { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
