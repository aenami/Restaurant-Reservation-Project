USE reservation_restaurantdb;

INSERT INTO roles VALUES
(1, "Administrador"),
(2, "Cliente");

INSERT INTO mesas VALUES
(null, 4, 45000, "Azotea", null),
(null, 2, 25000, "Azotea", null),
(null, 3, 35000, "Central", null);

INSERT INTO tipo_platillos VALUES
(null, 'Desayuno'),
(null, 'Cena'),
(null, 'Almuerzo');

INSERT INTO clientes VALUES
('25545884', 'Venus Eliana', 'eliana@gmail.com','3147338048', 'Venus123', 2),
('1059238559', 'Julian Andres', 'juliannandres05@gmail.com','3128753244', 'Julian123', 2),
('1080923', 'David Diaz', 'david@gmail.com','3028763233', 'Davidsapo', 1);

INSERT INTO platillos VALUES
(null, 'Espagueti con salmón y verduras', 'Espagueti, Salmón, Tomates cherry, Brócoli, Hojas verdes, Salsa verde', 22500, 1),
(null, 'Espagueti con salsa de tomate', 'Espagueti, Salsa de tomate, Cebolla, Especias, Lechuga, Rodaja de tomate', 45000, 3),
(null, 'Pasta con pollo', 'Pasta penne, Trozos de pollo, Queso parmesano, Tomate cherry, Ajo', 40000, 2),
(null, 'Spaghetti Frutti di Mare', 'Spaghetti, Camarones, Almejas, Tomate cherry', 56000, 2),
(null, 'Carne a la parrilla', 'corte de res ribeye, Salsa gravy, Papas fritas gruesas, Zanahoria salteada, broccolini salteado', 76000, 1),
(null, 'Pollo asado al carbon', 'Pollo, Sal, Condimentos, Fuego', 67300, 3);

INSERT INTO imagenes_platillo VALUES
('platillo1.jpg', 1),
('platillo2.jpg', 2),
('platillo3.jpg', 3),
('platillo4.jpg', 4),
('platillo6.jpg', 5),
('platillo6.jpg', 6);

-- Rol
CREATE USER 'root2'@'localhost' IDENTIFIED BY 'Root2!';
GRANT ALL PRIVILEGES ON * TO  'root2'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;