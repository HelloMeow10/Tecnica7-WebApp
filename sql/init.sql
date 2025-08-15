-- Creación de la tabla de Roles
CREATE TABLE Roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);

-- Insertar roles iniciales
INSERT INTO Roles (role_name) VALUES ('DIRECTOR'), ('PROFESOR'), ('ALUMNO');

-- Creación de la tabla de Usuarios
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role_id INT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES Roles (role_id)
);

-- Creación de la tabla de Profesores (vinculada a Usuarios)
-- Esta tabla contendrá información específica del perfil de un profesor
CREATE TABLE Teachers (
    teacher_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    bio TEXT,
    profile_picture_url VARCHAR(255),
    -- Otros campos específicos para profesores pueden ir aquí
    FOREIGN KEY (user_id) REFERENCES Users (user_id) ON DELETE CASCADE
);

-- Creación de la tabla para los envíos del formulario de contacto
CREATE TABLE ContactSubmissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Agregar una restricción de unicidad al email para reflejar el comportamiento anterior
ALTER TABLE ContactSubmissions ADD CONSTRAINT email_unique_constraint UNIQUE (email);

-- Creación de la tabla de Alumnos (vinculada a Usuarios)
-- Por ahora la dejamos simple, se puede expandir en el futuro
CREATE TABLE Students (
    student_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    enrollment_date DATE,
    -- Otros campos específicos para alumnos pueden ir aquí
    FOREIGN KEY (user_id) REFERENCES Users (user_id) ON DELETE CASCADE
);

-- Creación de la tabla de Directivos (vinculada a Usuarios)
-- Para información específica de los directivos
CREATE TABLE Admins (
    admin_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    office_location VARCHAR(100),
    -- Otros campos específicos para directivos pueden ir aquí
    FOREIGN KEY (user_id) REFERENCES Users (user_id) ON DELETE CASCADE
);
