USE reservation_restaurantdb;

INSERT INTO Mesa (tamaño_mesa, coste_mesa, ubicacion_mesa) VALUES
(4, 25000, "Terraza"),
(2, 15000, "Interior"),
(5, 35000, "VIP"),
(6, 45000, "Barra");


INSERT INTO Cliente (cedula_cliente, nombre_cliente, email_cliente, contraseña_cliente) VALUES
('25545884', 'Venus Eliana', 'eliana@gmail.com', 'Venus123'),
('1059238559', 'Julian Andres', 'juliannandres05@gmail.com', 'Julian123'),
('1080923', 'David Diaz', 'david@gmail.com', 'Davidsapo');

INSERT INTO Producto (nombre_producto, descripcion_producto, precio_producto, categoria_principal_producto, categoria_secundaria_producto) VALUES
('Espagueti con salmón y verduras', 'Espagueti, Salmón, Tomates cherry, Brócoli, Hojas verdes, Salsa verde', 22500, "Breakfast", "Entrada"),
('Espagueti con salsa de tomate', 'Espagueti, Salsa de tomate, Cebolla, Especias, Lechuga, Rodaja de tomate', 45000, "Lunch", "Plato fuerte"),
('Pasta con pollo', 'Pasta penne, Trozos de pollo, Queso parmesano, Tomate cherry, Ajo', 40000, "Dinner", "Entrada"),
('Spaghetti Frutti di Mare', 'Spaghetti, Camarones, Almejas, Tomate cherry', 56000, "Breakfast", "Entrada"),
('Carne a la parrilla', 'corte de res ribeye, Salsa gravy, Papas fritas gruesas, Zanahoria salteada, broccolini salteado', 76000, "Lunch", "Plato fuerte"),
('Pollo asado al carbon', 'Pollo, Sal, Condimentos, Fuego', 67300, "Dinner", "Postre");

INSERT INTO Imagen_producto VALUES
('platillo1.jpg', 1),
('platillo2.jpg', 2),
('platillo3.jpg', 3),
('platillo4.jpg', 4),
('platillo6.jpg', 5),
('platillo6.jpg', 6);

INSERT INTO Reserva (id_entrada_reserva, id_mesa_reserva, cedula_cliente_reserva) VALUES
(1, 2, 25545884),
(3, 1, 25545884);

-- Rol
CREATE USER 'root2'@'localhost' IDENTIFIED BY 'Root2!';
GRANT ALL PRIVILEGES ON * TO  'root2'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;