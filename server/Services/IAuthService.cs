using server.DTOs;

namespace server.Services;

public interface IAuthService
{
    Task<AuthResponseDto?> RegisterAsync(RegisterRequestDto request);
    Task<AuthResponseDto?> LoginAsync(LoginRequestDto request);
    Task<UserDto?> GetUserByIdAsync(int userId);
}
