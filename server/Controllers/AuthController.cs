// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Mvc;
// using server.DTOs;
// using server.Services;
// using System.Security.Claims;

// namespace server.Controllers;

// [ApiController]
// [Route("api/[controller]")]
// public class AuthController : ControllerBase
// {
//     private readonly IAuthService _authService;
//     private readonly ILogger<AuthController> _logger;

//     public AuthController(IAuthService authService, ILogger<AuthController> logger)
//     {
//         _authService = authService;
//         _logger = logger;
//     }

//     [HttpPost("register")]
//     public async Task<IActionResult> Register([FromBody] RegisterRequestDto request)
//     {
//         try
//         {
//             if (!ModelState.IsValid)
//             {
//                 return BadRequest(new { message = "Invalid request data", errors = ModelState });
//             }

//             if (string.IsNullOrWhiteSpace(request.FullName))
//             {
//                 return BadRequest(new { message = "Full name is required" });
//             }

//             if (string.IsNullOrWhiteSpace(request.Email))
//             {
//                 return BadRequest(new { message = "Email is required" });
//             }

//             if (string.IsNullOrWhiteSpace(request.Password))
//             {
//                 return BadRequest(new { message = "Password is required" });
//             }

//             if (request.Password.Length < 6)
//             {
//                 return BadRequest(new { message = "Password must be at least 6 characters" });
//             }

//             var validRoles = new[] { "Student", "Faculty", "Admin" };
//             if (!validRoles.Contains(request.Role))
//             {
//                 return BadRequest(new { message = "Invalid role. Must be Student, Faculty, or Admin" });
//             }

//             var result = await _authService.RegisterAsync(request);
//             if (result == null)
//             {
//                 return BadRequest(new { message = "User with this email already exists" });
//             }

//             _logger.LogInformation("User registered successfully: {Email}", request.Email);
//             return Ok(result);
//         }
//         catch (Exception ex)
//         {
//             _logger.LogError(ex, "Error during registration");
//             return StatusCode(500, new { message = "An error occurred during registration" });
//         }
//     }

//     [HttpPost("login")]
//     public async Task<IActionResult> Login([FromBody] LoginRequestDto request)
//     {
//         try
//         {
//             if (!ModelState.IsValid)
//             {
//                 return BadRequest(new { message = "Invalid request data", errors = ModelState });
//             }

//             if (string.IsNullOrWhiteSpace(request.Email))
//             {
//                 return BadRequest(new { message = "Email is required" });
//             }

//             if (string.IsNullOrWhiteSpace(request.Password))
//             {
//                 return BadRequest(new { message = "Password is required" });
//             }

//             var result = await _authService.LoginAsync(request);
//             if (result == null)
//             {
//                 return Unauthorized(new { message = "Invalid email or password" });
//             }

//             _logger.LogInformation("User logged in successfully: {Email}", request.Email);
//             return Ok(result);
//         }
//         catch (Exception ex)
//         {
//             _logger.LogError(ex, "Error during login");
//             return StatusCode(500, new { message = "An error occurred during login" });
//         }
//     }

//     [Authorize]
//     [HttpGet("me")]
//     public async Task<IActionResult> GetCurrentUser()
//     {
//         try
//         {
//             var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
//             if (userIdClaim == null || !int.TryParse(userIdClaim, out int userId))
//             {
//                 return Unauthorized(new { message = "Invalid token" });
//             }

//             var user = await _authService.GetUserByIdAsync(userId);
//             if (user == null)
//             {
//                 return NotFound(new { message = "User not found" });
//             }

//             return Ok(user);
//         }
//         catch (Exception ex)
//         {
//             _logger.LogError(ex, "Error getting current user");
//             return StatusCode(500, new { message = "An error occurred" });
//         }
//     }
// }


using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.DTOs;
using server.Services;
using System.Security.Claims;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly ILogger<AuthController> _logger;

    public AuthController(IAuthService authService, ILogger<AuthController> logger)
    {
        _authService = authService;
        _logger = logger;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequestDto request)
    {
        var result = await _authService.RegisterAsync(request);

        if (result == null)
            return BadRequest(new { message = "User with this email already exists" });

        _logger.LogInformation("User registered: {Email}", request.Email);

        return Ok(result);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequestDto request)
    {
        var result = await _authService.LoginAsync(request);

        if (result == null)
            return Unauthorized(new { message = "Invalid email or password" });

        _logger.LogInformation("User logged in: {Email}", request.Email);

        return Ok(result);
    }

    [Authorize]
    [HttpGet("me")]
    public async Task<IActionResult> GetCurrentUser()
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

        var user = await _authService.GetUserByIdAsync(userId);

        return user == null
            ? NotFound(new { message = "User not found" })
            : Ok(user);
    }
}
