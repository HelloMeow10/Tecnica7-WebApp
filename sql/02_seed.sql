-- Este script se ejecuta después de init.sql para poblar la base de datos con datos iniciales.

-- Crear un usuario DIRECTOR por defecto
-- La contraseña es "admin123" y se hashea con bcrypt.
-- El hash se generó externamente para no exponer la contraseña en texto plano aquí.
-- Puedes generar un nuevo hash con:
-- node -e "console.log(require('bcrypt').hashSync('nueva_contraseña', 10));"
-- Contraseña para este hash: admin123
DO $$
DECLARE
    director_role_id INT;
BEGIN
    -- Obtener el ID del rol 'DIRECTOR'
    SELECT role_id INTO director_role_id FROM Roles WHERE role_name = 'DIRECTOR';

    -- Insertar el usuario admin si no existe
    IF NOT EXISTS (SELECT 1 FROM Users WHERE email = 'admin@example.com') THEN
        INSERT INTO Users (email, password_hash, first_name, last_name, role_id)
        VALUES (
            'admin@example.com',
            '$2b$10$E.ExA5X/iV/aH03i3i3f6eCgDE4L/A9z3b0C2z.E7E.WJ.NqG3y8G', -- Hash para "admin123"
            'Admin',
            'User',
            director_role_id
        );
    END IF;
END $$;
