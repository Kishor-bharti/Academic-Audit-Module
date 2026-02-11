using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models;

[Table("Faculties")]
public class Faculty
{
    [Key]
    [Column("id")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    [Column("faculty_id")]
    public string FacultyId { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    [Column("full_name")]
    public string FullName { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [MaxLength(100)]
    [Column("email")]
    public string Email { get; set; } = string.Empty;

    [MaxLength(50)]
    [Column("department")]
    public string Department { get; set; } = string.Empty;

    [MaxLength(100)]
    [Column("specialization")]
    public string Specialization { get; set; } = string.Empty;

    [MaxLength(20)]
    [Column("designation")]
    public string Designation { get; set; } = string.Empty;

    [Column("joining_date")]
    public DateTime JoiningDate { get; set; } = DateTime.UtcNow;

    [Column("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
