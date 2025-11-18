-- Creando la base de datos
CREATE DATABASE IF NOT EXISTS  reservation_restaurantdb;
USE reservation_restaurantdb;

-- -------------------
-- PARAMETRIC TABLES--
-- -------------------

-- 01
-- table roles
CREATE TABLE IF NOT EXISTS roles(
    id_rol TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(20) NOT NULL
);

-- 02
-- table mesas
CREATE TABLE IF NOT EXISTS mesas(
    id_mesa TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tamaño_mesa TINYINT Not NULL,
    coste_mesa DECIMAL(10,2) NOT NULL,
    ubicacion_mesa VARCHAR(40),
    disponibilidad_mesa BOOLEAN DEFAULT TRUE
);

-- 03
-- table tipo_platillos
CREATE TABLE IF NOT EXISTS tipo_platillos(
    id_platillo_tipo TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tipo_platillo VARCHAR(30) NOT NULL
);

-- --------------------------
-- TABLES WITH FOREIGN KEYS--
-- --------------------------

-- 04
-- table clientes
CREATE TABLE IF NOT EXISTS clientes(
    cedula_cliente VARCHAR(12) PRIMARY KEY,
    nombre_cliente VARCHAR(50) NOT NULL,
    email_cliente VARCHAR(150) NOT NULL,
    telefono_cliente VARCHAR(15) NOT NULL,
    contraseña_cliente VARCHAR(80) NOT NULL,

    id_rol_cliente TINYINT UNSIGNED NOT NULL, 
    CONSTRAINT fk_id_rol_cliente FOREIGN KEY(id_rol_cliente) REFERENCES roles(id_rol)
);

-- 05
-- table platillos
CREATE TABLE IF NOT EXISTS platillos(
    id_platillo TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_platillo VARCHAR(50) NOT NULL,
    descripcion_platillo VARCHAR(100)NOT NULL,
    precio_platillo DECIMAL(10,2) NOT NULL,

    id_tipo_platillo TINYINT UNSIGNED NOT NULL,
    CONSTRAINT fk_id_tipo_platillo FOREIGN KEY(id_tipo_platillo) REFERENCES tipo_platillos(id_platillo_tipo)
);

-- 06
-- table imagenes_platillo
CREATE TABLE IF NOT EXISTS imagenes_platillo(
    ruta_imagen VARCHAR(250) NOT NULL,

    id_platillo_imagen TINYINT UNSIGNED,
    CONSTRAINT fk_id_platillo_imagen FOREIGN KEY(id_platillo_imagen) REFERENCES platillos(id_platillo)
);


-- 07
-- table reservas
CREATE TABLE IF NOT EXISTS reservas(
    id_reserva INT AUTO_INCREMENT PRIMARY KEY,

    id_platillo_reserva TINYINT UNSIGNED, 
    id_mesa_reserva TINYINT UNSIGNED , 
    cedula_cliente_reserva VARCHAR(12),
    CONSTRAINT fk_platillo_reserva FOREIGN KEY (id_platillo_reserva) REFERENCES platillos(id_platillo),
    CONSTRAINT fk_mesa_reserva FOREIGN KEY (id_mesa_reserva) REFERENCES mesas(id_mesa),
    CONSTRAINT fk_cliente_reserva FOREIGN KEY (cedula_cliente_reserva) REFERENCES clientes(cedula_cliente)
);

