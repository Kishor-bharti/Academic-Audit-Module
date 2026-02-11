using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models;

[Table("AuditReports")]
public class AuditReport
{
    [Key]
    [Column("id")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    [MaxLength(200)]
    [Column("report_title")]
    public string ReportTitle { get; set; } = string.Empty;

    [MaxLength(50)]
    [Column("report_type")]
    public string ReportType { get; set; } = string.Empty;

    [MaxLength(50)]
    [Column("department")]
    public string Department { get; set; } = string.Empty;

    [MaxLength(20)]
    [Column("semester")]
    public string Semester { get; set; } = string.Empty;

    [MaxLength(20)]
    [Column("year")]
    public string Year { get; set; } = string.Empty;

    [Column("report_data")]
    public string ReportData { get; set; } = string.Empty;

    [MaxLength(50)]
    [Column("status")]
    public string Status { get; set; } = "Draft";

    [Column("generated_by")]
    public int GeneratedBy { get; set; }

    [Column("generated_at")]
    public DateTime GeneratedAt { get; set; } = DateTime.UtcNow;

    [Column("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
