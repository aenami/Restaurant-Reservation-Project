USE restaurante;

INSERT INTO roles VALUES
(1, "Administrador"),
(2, "Cliente");

INSERT INTO clientes VALUES
('25545884', 'Venus Eliana', '3147338048', 'Venus123', 2),
('1059238559', 'Julian Andres', '3128753244', 'Julian123', 1),
('1080923', 'David Diaz', '3028763233', 'Davidsapo', 1);

INSERT INTO tipo_platillos VALUES
(null, 'Entrada'),
(null, 'Bebida'),
(null, 'Postre'),
(null, 'Acompañamiento'),
(null, 'Platillo fuerte');

INSERT INTO platillos VALUES
(null, 'fideos napolitanos', 'Fideos al estilo napolitano', 22500, 1),
(null, 'Carne wagyu', 'Carne premiun wagyu', 45000, 5),
(null, 'coca cola', 'Bebida fria cocacola', 4000, 2);

INSERT INTO imagenes_platillo VALUES
('fideos_napolitanos.jpg', 1),
('carne-wagyu.jpg', 2),
('coca_cola.jpg', 3);
