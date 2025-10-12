-- create on 20200909
-- databaserestaurante

CREATE DATABASE IF NOT EXISTS restaurante DEFAULT CHARACTER SET utf8
COLLATE utf8_unicode_ci;

USE restaurante;

-- -------------------
-- PARAMETRIC TABLES--
-- -------------------

-- 01
-- table roles
CREATE TABLE IF NOT EXISTS roles(
    id_rol TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

-- 02
-- table mesas
CREATE TABLE IF NOT EXISTS mesas(
    id_mesa TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tamaño_mesa TINYINT Not NULL,
    coste_mesa DECIMAL(10,2) NOT NULL,
    ubicacion_mesa VARCHAR(40) COLLATE utf8_unicode_ci NOT NULL,
    disponibilidad_mesa BOOLEAN 
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

-- 03
-- table tipo_platillos
CREATE TABLE IF NOT EXISTS tipo_platillos(
    id_platillo_tipo TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tipo_platillo VARCHAR(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

-- --------------------------
-- TABLES WITH FOREIGN KEYS--
-- --------------------------

-- 04
-- table clientes
CREATE TABLE IF NOT EXISTS clientes(
    cedula_cliente VARCHAR(12) COLLATE utf8_unicode_ci PRIMARY KEY,
    nombre_cliente VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
    telefono_cliente VARCHAR(15) COLLATE utf8_unicode_ci NOT NULL,
    contraseña_cliente VARCHAR(80) COLLATE utf8_unicode_ci NOT NULL,
    id_rol_cliente TINYINT UNSIGNED NOT NULL -- FOREIGN KEY AQUI
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Realizando enlace a nivel de configuracion entre las tablas FOREIGN KEY-PRIMARY KEY
ALTER TABLE clientes 
    ADD KEY(id_rol_cliente), -- FOREIGN KEY DE NUESTRA TABLA 
    ADD CONSTRAINT fk_rol_cliente FOREIGN KEY (id_rol_cliente) -- NOMBRE DE LA LLAVE QUE REALIZARA EL ENLACE,
    -- FOREIGN KEY DE NUESTRA TABLA, REFERENCIA A LA LLAVE PRIMARIA DE LA TABLA PRINCIPAL CON LA QUE SE RELACION
    REFERENCES roles(id_rol)
        on update no action
        on delete no action;

-- 05
-- table platillos
CREATE TABLE IF NOT EXISTS platillos(
    id_platillo TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_platillo VARCHAR(30) COLLATE utf8_unicode_ci NOT NULL,
    descripcion_platillo VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
    precio_platillo DECIMAL(10,2) NOT NULL,
    id_tipo_platillo TINYINT UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

-- Realizando enlace a nivel de configuracion entre las tablas FOREIGN KEY-PRIMARY KEY
ALTER TABLE platillos 
    -- Primer Enlace
    ADD KEY(id_tipo_platillo), -- FOREIGN KEY DE NUESTRA TABLA 
    ADD CONSTRAINT fk_tipo_platillo FOREIGN KEY (id_tipo_platillo) -- NOMBRE DE LA LLAVE QUE REALIZARA EL ENLACE,
    -- FOREIGN KEY DE NUESTRA TABLA, REFERENCIA A LA LLAVE PRIMARIA DE LA TABLA PRINCIPAL CON LA QUE SE RELACION
        REFERENCES tipo_platillos(id_platillo_tipo)
        on update no action
        on delete no action;

-- 06
-- table imagenes_platillo
CREATE TABLE IF NOT EXISTS imagenes_platillo(
    ruta_imagen VARCHAR(250) NOT NULL,
    id_platillo_imagen TINYINT UNSIGNED
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE imagenes_platillo 
    ADD KEY(id_platillo_imagen),
    ADD CONSTRAINT fk_platillo_imagen FOREIGN KEY (id_platillo_imagen)
        REFERENCES platillos (id_platillo)
        on update no action
        on delete no action;

-- 07
-- table reservas
CREATE TABLE IF NOT EXISTS reservas(
    id_reserva INT AUTO_INCREMENT PRIMARY KEY,
    id_platillo_reserva TINYINT UNSIGNED, 
    id_mesa_reserva TINYINT UNSIGNED , 
    cedula_cliente_reserva VARCHAR(12) COLLATE utf8_unicode_ci 
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

-- Realizando enlace a nivel de configuracion entre las tablas FOREIGN KEY-PRIMARY KEY
ALTER TABLE reservas 
    -- Primer Enlace
    ADD KEY(id_platillo_reserva), 
    ADD CONSTRAINT fk_platillo_reserva FOREIGN KEY (id_platillo_reserva) 
        REFERENCES platillos(id_platillo)
        on update no action
        on delete no action,
    -- Segundo Enlace
    ADD KEY(id_mesa_reserva), 
    ADD CONSTRAINT fk_mesa_reserva FOREIGN KEY (id_mesa_reserva) 
        REFERENCES mesas(id_mesa)
        on update no action
        on delete no action,
    -- Tercer Enlace
    ADD KEY(cedula_cliente_reserva), 
    ADD CONSTRAINT fk_cliente_reserva FOREIGN KEY (cedula_cliente_reserva) 
        REFERENCES clientes(cedula_cliente)
        on update no action
        on delete no action;