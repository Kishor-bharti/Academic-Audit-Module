using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class AuditReport
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(200)]
    public string ReportTitle { get; set; } = string.Empty;

    [MaxLength(50)]
    public string ReportType { get; set; } = string.Empty; // Academic, Performance, Compliance

    [MaxLength(50)]
    public string Department { get; set; } = string.Empty;

    [MaxLength(20)]
    public string Semester { get; set; } = string.Empty;

    [MaxLength(20)]
    public string Year { get; set; } = string.Empty;

    public string ReportData { get; set; } = string.Empty; // JSON data

    [MaxLength(50)]
    public string Status { get; set; } = "Draft"; // Draft, Published, Archived

    public int GeneratedBy { get; set; } // User ID

    public DateTime GeneratedAt { get; set; } = DateTime.UtcNow;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
