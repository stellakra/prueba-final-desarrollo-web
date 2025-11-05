-- Base de Datos: AetherBound

-- ========================
-- CREACIÓN DE TABLAS
-- ========================

CREATE TABLE Jugador (
    id_jugador INTEGER PRIMARY KEY,
    nombre VARCHAR(100),
    nivel INTEGER,
    experiencia INTEGER
);

CREATE TABLE Personaje (
    id_personaje INTEGER PRIMARY KEY,
    nombre VARCHAR(100),
    clase VARCHAR(100),
    nivel INTEGER,
    vida INTEGER,
    mana INTEGER,
    id_jugador INTEGER,
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador)
);

CREATE TABLE Habilidad (
    id_habilidad INTEGER PRIMARY KEY,
    nombre VARCHAR(100),
    tipo VARCHAR(100),
    poder INTEGER,
    coste_mana INTEGER
);

CREATE TABLE Personaje_Habilidad (
    id_personaje INTEGER,
    id_habilidad INTEGER,
    PRIMARY KEY (id_personaje, id_habilidad),
    FOREIGN KEY (id_personaje) REFERENCES Personaje(id_personaje),
    FOREIGN KEY (id_habilidad) REFERENCES Habilidad(id_habilidad)
);

CREATE TABLE Objeto (
    id_objeto INTEGER PRIMARY KEY,
    nombre VARCHAR(100),
    tipo VARCHAR(100),
    efecto VARCHAR(200)
);

CREATE TABLE Inventario (
    id_inventario INTEGER PRIMARY KEY,
    id_personaje INTEGER,
    FOREIGN KEY (id_personaje) REFERENCES Personaje(id_personaje)
);

CREATE TABLE Inventario_Objeto (
    id_inventario INTEGER,
    id_objeto INTEGER,
    cantidad INTEGER,
    PRIMARY KEY (id_inventario, id_objeto),
    FOREIGN KEY (id_inventario) REFERENCES Inventario(id_inventario),
    FOREIGN KEY (id_objeto) REFERENCES Objeto(id_objeto)
);

CREATE TABLE Enemigo (
    id_enemigo INTEGER PRIMARY KEY,
    nombre VARCHAR(100),
    tipo VARCHAR(100),
    vida INTEGER,
    ataque INTEGER
);

CREATE TABLE Zona (
    id_zona INTEGER PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(200)
);

CREATE TABLE Enemigo_Zona (
    id_enemigo INTEGER,
    id_zona INTEGER,
    PRIMARY KEY (id_enemigo, id_zona),
    FOREIGN KEY (id_enemigo) REFERENCES Enemigo(id_enemigo),
    FOREIGN KEY (id_zona) REFERENCES Zona(id_zona)
);

CREATE TABLE Mision (
    id_mision INTEGER PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(200),
    recompensa_exp INTEGER
);

CREATE TABLE Jugador_Mision (
    id_jugador INTEGER,
    id_mision INTEGER,
    estado VARCHAR(50),
    PRIMARY KEY (id_jugador, id_mision),
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador),
    FOREIGN KEY (id_mision) REFERENCES Mision(id_mision)
);

CREATE TABLE Comercio (
    id_comercio INTEGER PRIMARY KEY,
    nombre VARCHAR(100),
    tipo VARCHAR(100)
);

CREATE TABLE Comercio_Objeto (
    id_comercio INTEGER,
    id_objeto INTEGER,
    precio INTEGER,
    PRIMARY KEY (id_comercio, id_objeto),
    FOREIGN KEY (id_comercio) REFERENCES Comercio(id_comercio),
    FOREIGN KEY (id_objeto) REFERENCES Objeto(id_objeto)
);

-- ========================
-- DATOS DE PRUEBA
-- ========================

INSERT INTO Jugador VALUES (1, 'Elandor', 5, 1200);

INSERT INTO Personaje VALUES (1, 'Thalor', 'Paladín', 5, 100, 50, 1);
INSERT INTO Personaje VALUES (2, 'Kael', 'Monje', 4, 80, 30, 1);

INSERT INTO Habilidad VALUES (1, 'Luz Purificadora', 'Curación', 40, 20);
INSERT INTO Habilidad VALUES (2, 'Golpe de Fe', 'Físico', 60, 10);

INSERT INTO Personaje_Habilidad VALUES (1, 1);
INSERT INTO Personaje_Habilidad VALUES (1, 2);

INSERT INTO Objeto VALUES (1, 'Poción de Vida', 'Consumible', 'Restaura 50 HP');
INSERT INTO Objeto VALUES (2, 'Daga Arrojadiza', 'Arma', 'Inflige 30 daño a distancia');

INSERT INTO Inventario VALUES (1, 1);
INSERT INTO Inventario VALUES (2, 2);

INSERT INTO Inventario_Objeto VALUES (1, 1, 5);
INSERT INTO Inventario_Objeto VALUES (1, 2, 2);
INSERT INTO Inventario_Objeto VALUES (2, 1, 3);

INSERT INTO Enemigo VALUES (1, 'Duende del Bosque', 'Bestia', 60, 15);
INSERT INTO Enemigo VALUES (2, 'Lobo Gigante', 'Bestia', 90, 20);

INSERT INTO Zona VALUES (1, 'Bosque de Lunaria', 'Zona densa con criaturas mágicas');
INSERT INTO Zona VALUES (2, 'Ruinas de Sarragán', 'Antigua ciudad maldita');

INSERT INTO Enemigo_Zona VALUES (1, 1);
INSERT INTO Enemigo_Zona VALUES (2, 1);
INSERT INTO Enemigo_Zona VALUES (2, 2);

INSERT INTO Mision VALUES (1, 'Limpieza del bosque', 'Derrota a los duendes del bosque', 200);
INSERT INTO Mision VALUES (2, 'Rescate en las ruinas', 'Encuentra al herido', 300);

INSERT INTO Jugador_Mision VALUES (1, 1, 'En progreso');
INSERT INTO Jugador_Mision VALUES (1, 2, 'Completada');

INSERT INTO Comercio VALUES (1, 'Tienda de Lunaria', 'Pociones');
INSERT INTO Comercio VALUES (2, 'Mercader Nómada', 'Armas');

INSERT INTO Comercio_Objeto VALUES (1, 1, 50);
INSERT INTO Comercio_Objeto VALUES (2, 2, 120);

-- ========================
-- CONSULTAS DE EJEMPLO
-- ========================

-- Objetos de un personaje
-- SELECT p.nombre, o.nombre, io.cantidad ...
-- Ver habilidades de un personaje
-- Enemigos por zona
-- Misiones activas del jugador
-- Objetos en comercio
-- Total de experiencia ganada por misiones completadas

select nombre
from PERSONAJE
