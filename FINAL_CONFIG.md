# FINAL CONFIGURATION

## Backend Port: 5001
## Frontend Port: 5173
## Frontend Base URL: http://localhost:5001/api

---

## Backend Configuration

### launchSettings.json
```json
{
  "$schema": "https://json.schemastore.org/launchsettings.json",
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": false,
      "applicationUrl": "http://localhost:5001",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

### appsettings.json
- Removed Kestrel configuration
- Port controlled by launchSettings.json

### appsettings.Development.json
- Removed Kestrel configuration
- Port controlled by launchSettings.json

### Program.cs
- No Kestrel configuration
- CORS allows: http://localhost:5173, http://localhost:5174
- CORS allows credentials, headers, methods

---

## Frontend Configuration

### axios.js
```javascript
baseURL: 'http://localhost:5001/api'
```

---

## Start Commands

**Backend:**
```bash
cd server
dotnet run
```
Backend runs on: **http://localhost:5001**

**Frontend:**
```bash
cd client
npm run dev
```
Frontend runs on: **http://localhost:5173**

---

## Test Registration

1. Open browser: http://localhost:5173
2. Navigate to Signup
3. Fill form and submit
4. Should successfully register user

**No more ERR_CONNECTION_REFUSED**
