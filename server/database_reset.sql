-- Drop existing tables if they exist
DROP TABLE IF EXISTS "Marks" CASCADE;
DROP TABLE IF EXISTS "AuditReports" CASCADE;
DROP TABLE IF EXISTS "Courses" CASCADE;
DROP TABLE IF EXISTS "Faculties" CASCADE;
DROP TABLE IF EXISTS "Students" CASCADE;
DROP TABLE IF EXISTS "Users" CASCADE;

-- Create Users table
CREATE TABLE "Users" (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'Student',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX idx_users_email ON "Users"(email);

-- Create index on role for filtering
CREATE INDEX idx_users_role ON "Users"(role);

-- Add check constraint for role validation
ALTER TABLE "Users" ADD CONSTRAINT chk_user_role 
    CHECK (role IN ('Student', 'Faculty', 'Admin'));

-- Create Students table
CREATE TABLE "Students" (
    id SERIAL PRIMARY KEY,
    student_id VARCHAR(50) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    department VARCHAR(50),
    semester VARCHAR(20),
    year VARCHAR(20),
    enrollment_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create Faculties table
CREATE TABLE "Faculties" (
    id SERIAL PRIMARY KEY,
    faculty_id VARCHAR(50) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    department VARCHAR(50),
    specialization VARCHAR(100),
    designation VARCHAR(20),
    joining_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create Courses table
CREATE TABLE "Courses" (
    id SERIAL PRIMARY KEY,
    course_code VARCHAR(50) NOT NULL UNIQUE,
    course_name VARCHAR(200) NOT NULL,
    department VARCHAR(50),
    semester VARCHAR(20),
    credits INTEGER NOT NULL DEFAULT 0,
    description VARCHAR(500),
    faculty_id INTEGER,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create Marks table
CREATE TABLE "Marks" (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    exam_type VARCHAR(50) NOT NULL,
    marks_obtained DECIMAL(5,2) NOT NULL,
    max_marks DECIMAL(5,2) NOT NULL,
    semester VARCHAR(20),
    year VARCHAR(20),
    exam_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create AuditReports table
CREATE TABLE "AuditReports" (
    id SERIAL PRIMARY KEY,
    report_title VARCHAR(200) NOT NULL,
    report_type VARCHAR(50),
    department VARCHAR(50),
    semester VARCHAR(20),
    year VARCHAR(20),
    report_data TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'Draft',
    generated_by INTEGER NOT NULL,
    generated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
