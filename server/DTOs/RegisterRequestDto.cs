// namespace server.DTOs;

// public class RegisterRequestDto
// {
//     public string FullName { get; set; } = string.Empty;
//     public string Email { get; set; } = string.Empty;
//     public string Password { get; set; } = string.Empty;
//     public string Role { get; set; } = "Student";
// }


using System.ComponentModel.DataAnnotations;

namespace server.DTOs;

public class RegisterRequestDto
{
    [Required]
    public string FullName { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MinLength(6)]
    public string Password { get; set; } = string.Empty;

    [Required]
    [RegularExpression("Student|Faculty|Admin",
        ErrorMessage = "Role must be Student, Faculty, or Admin")]
    public string Role { get; set; } = "Student";
}
