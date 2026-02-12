# 🎓 Academic Audit Module

A full-stack Academic Audit Management System for colleges/universities.

## 🏗 Tech Stack

**Frontend**
- React (Vite)
- Axios
- React Router v6

**Backend**
- ASP.NET Core Web API (.NET 10)
- Entity Framework Core 10
- JWT Authentication

**Database**
- PostgreSQL

---

## 🚀 Windows Setup Guide (Main Branch - .NET 10)

> This branch requires .NET 10 SDK

### ✅ 1. Install Required Software

**1️⃣ Install Node.js (LTS)**  
Download:  
https://nodejs.org  
Verify:  
```powershell
node -v
npm -v
```

**2️⃣ Install PostgreSQL (v15+)**  
Download:  
https://www.postgresql.org/download/windows/  
> During installation:  
> - Remember your password  
> - Default port: 5432

**3️⃣ Install .NET 10 SDK (x64)**  
Download:  
https://dotnet.microsoft.com/download  
Verify installation:  
```bash
dotnet --version
```
Expected output:
> 10.0.xxx  
If not → install correct SDK.

---

### 📂 2. Clone Repository
```bash
git clone <your-repository-url>
cd Academic-Audit-Module
git checkout main
```

---

### 🗄 3. Setup Database  
Open PowerShell:

```bash
psql -U postgres
```
Enter your password.

Create database:
```sql
CREATE DATABASE academicaudit;
```
Exit:
```bash
\q
```

---

### ⚙ 4. Setup Backend  
Go to server folder:
```bash
cd server
```
Restore dependencies:
```bash
dotnet restore
```
Build:
```bash
dotnet build
```
Run:
```bash
dotnet run
```
Backend should start on:
> http://localhost:5001  
(Check `launchSettings.json` if different)

---

### 💻 5. Setup Frontend  
Open a new terminal.

```bash
cd client
npm install
npm run dev
```
Frontend will run on:
> http://localhost:5173

---

### 🔗 6. Verify API Connection  
Make sure `client/src/api/axios.js` has:

```js
baseURL: "http://localhost:5001/api"
```
Now open:

> http://localhost:5173

Try:
- Register
- Login

If successful → setup complete 🎉

---

## 🛠 Troubleshooting

#### 🔴 Port Already In Use

```powershell
Get-Process dotnet
Stop-Process -Name dotnet -Force
```

#### 🔴 Database Connection Error
Check `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5432;Database=academicaudit;Username=postgres;Password=YOUR_PASSWORD"
}
```

---

### 📌 Recommended (Prevent SDK Issues)

Add this file to root:

**global.json**
```json
{
  "sdk": {
    "version": "10.0.103"
  }
}
```
This ensures everyone uses the same SDK version.

---

## 🌿 Branch Strategy

- **main** → .NET 10 (Windows environment)
- **arch** → .NET 8 (Linux environment)

---

## 📄 License

This project is developed as part of an academic initiative.

---

## 👨‍💻 Author

Kishor Bharti