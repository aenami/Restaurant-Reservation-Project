-- Creando la base de datos
CREATE DATABASE IF NOT EXISTS  reservation_restaurantdb;
USE reservation_restaurantdb;

-- -------------------
-- PARAMETRIC TABLES--
-- ------------------- 

-- 01  
-- table mesas
CREATE TABLE IF NOT EXISTS Mesa(
    id_mesa TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    tamaño_mesa TINYINT Not NULL,
    coste_mesa DECIMAL(10,2) NOT NULL,
    ubicacion_mesa ENUM("Terraza", "Interior", "VIP", "Barra") NOT NULL,
    disponibilidad_mesa BOOLEAN DEFAULT TRUE
);

-- 02
-- table clientes
CREATE TABLE IF NOT EXISTS Cliente(
    cedula_cliente VARCHAR(12) PRIMARY KEY,
    nombre_cliente VARCHAR(50) NOT NULL,
    email_cliente VARCHAR(150) NOT NULL,
    telefono_cliente VARCHAR(15), 
    contraseña_cliente VARCHAR(80) NOT NULL,

    rol_cliente ENUM("Cliente", "Administrador")
);

-- 03
-- table productos
CREATE TABLE IF NOT EXISTS Producto(
    id_producto TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(50) NOT NULL,
    descripcion_producto VARCHAR(100),
    precio_producto DECIMAL(10,2) NOT NULL,

    categoria_principal_producto ENUM("Breakfast", "Lunch", "Dinner"),
    categoria_secundaria_producto ENUM("Bebida", "Postre", "Plato fuerte", "Entrada")
);

-- --------------------------
-- TABLES WITH FOREIGN KEYS--
-- --------------------------

-- 04
-- table imagenes_platillo
CREATE TABLE IF NOT EXISTS Imagen_producto(
    ruta_imagen VARCHAR(250) NOT NULL,

    id_producto_imagen TINYINT UNSIGNED,
    CONSTRAINT fk_id_producto_imagen FOREIGN KEY(id_producto_imagen) REFERENCES Producto(id_producto)
);

-- 05
-- table reservas
CREATE TABLE IF NOT EXISTS Reserva(
    id_reserva INT AUTO_INCREMENT PRIMARY KEY,

    id_entrada_reserva TINYINT UNSIGNED, 
    id_mesa_reserva TINYINT UNSIGNED , 
    cedula_cliente_reserva VARCHAR(12),
    CONSTRAINT fk_entrada_reserva FOREIGN KEY (id_entrada_reserva) REFERENCES Producto(id_producto),
    CONSTRAINT fk_mesa_reserva FOREIGN KEY (id_mesa_reserva) REFERENCES Mesa(id_mesa),
    CONSTRAINT fk_cliente_reserva FOREIGN KEY (cedula_cliente_reserva) REFERENCES Cliente(cedula_cliente)
);

