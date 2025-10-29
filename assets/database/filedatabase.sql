USE restaurante;

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
(null, 'fideos napolitanos', 'Fideos al estilo napolitano', 22500, 1),
(null, 'Carne wagyu', 'Carne premiun wagyu', 45000, 3),
(null, 'coca cola', 'Bebida fria cocacola', 4000, 2);

INSERT INTO imagenes_platillo VALUES
('platillo1.jpg', 1),
('platillo2.jpg', 2),
('platillo3.jpg', 3);
