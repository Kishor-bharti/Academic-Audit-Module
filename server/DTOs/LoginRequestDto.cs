// namespace server.DTOs;

// public class LoginRequestDto
// {
//     public string Email { get; set; } = string.Empty;
//     public string Password { get; set; } = string.Empty;
// }

using System.ComponentModel.DataAnnotations;

namespace server.DTOs;

public class LoginRequestDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MinLength(6)]
    public string Password { get; set; } = string.Empty;
}
