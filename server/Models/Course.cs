using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models;

[Table("Courses")]
public class Course
{
    [Key]
    [Column("id")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    [Column("course_code")]
    public string CourseCode { get; set; } = string.Empty;

    [Required]
    [MaxLength(200)]
    [Column("course_name")]
    public string CourseName { get; set; } = string.Empty;

    [MaxLength(50)]
    [Column("department")]
    public string Department { get; set; } = string.Empty;

    [MaxLength(20)]
    [Column("semester")]
    public string Semester { get; set; } = string.Empty;

    [Column("credits")]
    public int Credits { get; set; }

    [MaxLength(500)]
    [Column("description")]
    public string Description { get; set; } = string.Empty;

    [Column("faculty_id")]
    public int? FacultyId { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
