-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2022 a las 17:26:20
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `escrituracreativa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`) VALUES
(1, 'fantástico maravilloso'),
(2, 'fantástico realismo mágico'),
(3, 'fantástico'),
(4, 'policíaco detectivesco'),
(5, ' policiaco negro'),
(6, ' policiaco thriller'),
(7, ' policiaco espionaje'),
(8, ' memoria autobiografía'),
(9, 'memoria'),
(10, 'memoria confesión'),
(11, 'memoria diario'),
(12, 'carnavelescos parodia '),
(13, 'carnavelescos humor'),
(14, 'carnavelescos sátira'),
(15, 'testimoniales crónica literaria'),
(16, 'testimoniales diario'),
(17, 'históricos'),
(18, 'bildungsroman'),
(19, 'literatura infantil'),
(20, 'ensayo creativo'),
(21, 'literaturas digitales literaturas expandidas'),
(22, 'literaturas digitales cibernarrativa'),
(23, 'literaturas digitales ciberpoesía'),
(24, 'literaturas transmediales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `desafio`
--

CREATE TABLE `desafio` (
  `id` int(9) NOT NULL,
  `idGrupo` int(9) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `descripcion` mediumtext NOT NULL,
  `tipoCalificacion` int(11) NOT NULL,
  `idCategoria` int(9) NOT NULL,
  `colaborativo` tinyint(1) NOT NULL,
  `fechaIni` datetime NOT NULL DEFAULT current_timestamp(),
  `fechaFin` datetime NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `desafio`
--

INSERT INTO `desafio` (`id`, `idGrupo`, `titulo`, `descripcion`, `tipoCalificacion`, `idCategoria`, `colaborativo`, `fechaIni`, `fechaFin`, `activo`) VALUES
(3, 3, 'Relatar un Episodio Nacional', 'Narrar de forma satírica y breve uno de los Episodios Nacionales de Benito Pérez Galdós.', 0, 17, 1, '2021-11-29 16:09:45', '2022-11-30 16:04:51', 1),
(40, 5, 'Redacta un poema dadaísta.', 'Dada', 10, 23, 1, '2021-11-29 16:27:17', '2022-11-30 16:26:20', 1),
(50, 4, 'Desafío: resumen sobre la lingüística de Noam Chomsky.', 'Resumen donde el mejor texto será aquel que exprese con claridad y precisión las ideas aportadas al pensamiento y al lenguaje por Noam Chomsky.', 100, 20, 1, '2021-11-29 16:20:40', '2022-12-30 16:17:45', 1),
(67, 2, 'Noticia sensacionalista.', 'Se trata de escribir la noticia de la forma más sensacionalista posible, pero de forma sútil.', 5, 20, 1, '2021-11-29 16:24:59', '2022-11-30 16:20:57', 1),
(101, 1, 'Ensayo sobre el impacto de la movida madrileña en la escritura de Michi Panero.', 'Ensayo sobre el impacto que tuvo la movida madrileña, el fenómeno Almodóvar, etc. en la expresión y libros de Michi Panero.', 10, 20, 5, '2021-11-29 16:17:29', '2022-11-30 16:16:02', 1),
(213, 4, 'La Dalia Blanca', 'Eres un policía en África e inestigas la muerte de una joven negra albina, cuyo asesinato es exactamente igual al de la Dalia negra.', 5, 4, 3, '2021-11-29 16:40:31', '2022-11-30 16:36:51', 1),
(234, 6, 'Identifica y explica las diferencias entre un tiburón blanco y un tiburon martillo.', 'Hazlo de manera creativa empleando recursos y figuras literarias, para hacer alusión a su comportamiento y apariencia.', 50, 3, 1, '2021-11-29 16:30:06', '2022-12-30 16:27:23', 1),
(269, 3, 'Desafio1', '<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 37.5pt;font-family: Work Sans\", sans-serif;\"><em>“Quiero que escribas la continuación de la siguiente historia, que contenga los siguientes elementos: chica, refresco, eólica y pueblo”</em></span>&nbsp;</p>\n', 1, 11, 2, '2021-04-27 02:34:34', '2022-11-30 00:32:00', 1),
(270, 3, 'Desafio3000', '<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 37.5pt;font-family: Work Sans\", sans-serif;\"><em>“Quiero que escribas la continuación de la siguiente historia, que contenga los siguientes elementos: chica, refresco, eólica y pueblo”</em></span>&nbsp;</p>\r\n', 1, 7, 1, '2021-04-27 02:34:34', '2023-01-31 00:32:00', 1),
(345, 3, 'Redactar una crónica de la historia presente en un mundo distópico', 'Narrar una historia del día a día basada en un mundo totalmente distópico y desolado, en la estética cyberpunk.', 5, 1, 2, '2021-11-29 16:34:09', '2024-10-31 16:30:23', 1),
(432, 1, 'Ponte en la piel de John Galt y redacta tu propio diario', 'Escribe un diario a través de los ojos de John Galt.', 10, 11, 1, '2021-11-29 16:36:20', '2022-12-28 16:34:17', 1),
(433, 9, 'Especial Desafío Febrero', '<p>Relato corto.</p>\n', 1, 22, 2, '2022-02-03 18:28:01', '2022-02-28 18:26:00', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enlacedesafio`
--

CREATE TABLE `enlacedesafio` (
  `idDesafio` int(11) NOT NULL,
  `enlace` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

CREATE TABLE `equipo` (
  `id` int(9) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `idCreador` int(9) NOT NULL,
  `idGrupo` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`id`, `nombre`, `activo`, `idCreador`, `idGrupo`) VALUES
(74, 'hipotenusa', 1, 6, 4),
(75, 'equilatero', 1, 16, 3),
(76, 'vector', 1, 6, 3),
(78, 'pollo', 1, 9, 3),
(79, 'multiplexor', 1, 22, 9),
(80, 'yop', 1, 22, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipoestudiante`
--

CREATE TABLE `equipoestudiante` (
  `id` int(9) NOT NULL,
  `idEquipo` int(9) NOT NULL,
  `idEstudiante` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `equipoestudiante`
--

INSERT INTO `equipoestudiante` (`id`, `idEquipo`, `idEstudiante`) VALUES
(137, 74, 6),
(145, 75, 16),
(148, 76, 6),
(152, 78, 9),
(153, 79, 22),
(154, 80, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escrito`
--

CREATE TABLE `escrito` (
  `id` int(11) NOT NULL,
  `idGrupo` int(9) NOT NULL,
  `idDesafio` int(9) NOT NULL,
  `idEscritor` int(9) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `texto` longtext NOT NULL,
  `registro` longtext NOT NULL,
  `puntuacion` float NOT NULL,
  `comentario` mediumtext NOT NULL,
  `colaborativo` tinyint(1) NOT NULL,
  `finalizado` tinyint(1) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `escrito`
--

INSERT INTO `escrito` (`id`, `idGrupo`, `idDesafio`, `idEscritor`, `nombre`, `texto`, `registro`, `puntuacion`, `comentario`, `colaborativo`, `finalizado`, `fecha`, `activo`) VALUES
(145, 3, 269, 72, 'Escrito8', '<p><em>El otro día conocí a una chica en una reunión que me presentaron unos amigos. La chica me contó que en su pueblo se estaba construyendo una mini-central eólica usando latas de refresco. La gente estaba muy contenta.</em></p>\n<p></p>\n', '', 6, 'Me parece muy buena historia quizás mejoraría algunas cosas como.....', 2, 0, '2021-04-27 09:42:50', 1),
(146, 3, 270, 35, 'Escrito40', '<p><em>El otro día conocí a una chica en una reunión que me presentaron unos amigos. La chica me contó que en su pueblo se estaba construyendo una mini-central eólica usando latas de refresco. La gente estaba muy contenta.</em></p>\r\n<p></p>\r\n', '', 6, 'Me parece muy buena historia quizás mejoraría algunas cosas como.....', 2, 0, '2021-04-27 09:42:50', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `id` int(9) NOT NULL,
  `idEquipo` int(9) NOT NULL,
  `creadorEquipo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `id` int(9) NOT NULL,
  `idprofesor` int(9) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`id`, `idprofesor`, `nombre`, `activo`) VALUES
(1, 4, 'Filosofía', 1),
(2, 4, 'Periodismo', 1),
(3, 4, 'Historia', 1),
(4, 4, 'Lengua', 1),
(5, 4, 'Poesía', 1),
(6, 4, 'Biología', 1),
(9, 23, 'Febrero', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupoestudiante`
--

CREATE TABLE `grupoestudiante` (
  `id` int(9) NOT NULL,
  `idGrupo` int(9) NOT NULL,
  `idEstudiante` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `grupoestudiante`
--

INSERT INTO `grupoestudiante` (`id`, `idGrupo`, `idEstudiante`) VALUES
(1, 3, 6),
(2, 3, 7),
(3, 4, 9),
(4, 3, 9),
(5, 3, 16),
(7, 4, 6),
(8, 9, 22),
(9, 4, 16),
(10, 1, 22),
(11, 3, 22),
(12, 5, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajeria`
--

CREATE TABLE `mensajeria` (
  `id` int(9) NOT NULL,
  `idGrupo` int(9) NOT NULL,
  `idEmisor` int(9) NOT NULL,
  `idReceptor` int(9) NOT NULL,
  `idCreador` int(9) NOT NULL,
  `mensaje` mediumtext CHARACTER SET utf8 NOT NULL,
  `tipo` int(1) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mensajeria`
--

INSERT INTO `mensajeria` (`id`, `idGrupo`, `idEmisor`, `idReceptor`, `idCreador`, `mensaje`, `tipo`, `fecha`, `activo`) VALUES
(80, 3, 22, 7, 22, 'Veronica Calzada te envía una invitación para unirte a su equipo yop del Grupo de Historia', 2, '2022-02-03 18:49:17', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multimediadesafio`
--

CREATE TABLE `multimediadesafio` (
  `id` int(11) NOT NULL,
  `idDesafio` int(9) NOT NULL,
  `ruta` text NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `multimediadesafio`
--

INSERT INTO `multimediadesafio` (`id`, `idDesafio`, `ruta`, `fecha`) VALUES
(247, 269, 'http://localhost:3001/multimedia/users/4/269/video/eolica.mp4', '2021-04-27 09:32:39'),
(248, 269, 'http://localhost:3001/multimedia/users/4/269/image/pueblo.jpg', '2021-04-27 09:32:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multimediaescrito`
--

CREATE TABLE `multimediaescrito` (
  `id` int(9) NOT NULL,
  `idEscritor` int(11) NOT NULL,
  `idDesafio` int(11) NOT NULL,
  `ruta` text CHARACTER SET utf8 DEFAULT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `multimediaescrito`
--

INSERT INTO `multimediaescrito` (`id`, `idEscritor`, `idDesafio`, `ruta`, `fecha`, `orden`) VALUES
(131, 9, 269, 'http://localhost:3001/multimedia/users/9/269/image/alaska.jpg', '2021-04-27 09:37:04', 0),
(134, 32, 269, 'http://localhost:3001/multimedia/teams/32/269/image/alaska.jpg', '2021-04-27 09:50:48', 0),
(136, 33, 269, 'http://localhost:3001/multimedia/teams/33/269/audio/Daft Punk - Get Lucky.mp3', '2021-04-29 15:58:08', 0),
(137, 72, 269, 'http://localhost:3001/multimedia/teams/72/269/image/alaska.jpg', '2021-05-07 23:58:18', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(9) NOT NULL,
  `correo` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `foto` blob NOT NULL,
  `ruta` text NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `rol` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `correo`, `password`, `nombre`, `apellidos`, `foto`, `ruta`, `activo`, `rol`) VALUES
(4, 'cora@ucm.es', '$2a$08$yobEY52jl8G2FpN6Nhd7nOLVjNdn96A1GWGQwHuJFREpmMcsUye9G', 'cora', 'cora2', '', '', 1, 'T'),
(6, 'genesis@ucm.es', '$2a$08$yobEY52jl8G2FpN6Nhd7nOLVjNdn96A1GWGQwHuJFREpmMcsUye9G', 'Genesis', 'Duque', 0x433a5c66616b65706174685c6469676974616c2e6a7067, 'http://localhost:3001/multimedia/users/6/user6.jpg', 1, 'S'),
(7, 'gonzalo@ucm.es', '$2a$08$yobEY52jl8G2FpN6Nhd7nOLVjNdn96A1GWGQwHuJFREpmMcsUye9G', 'Gonzalo', 'Rivas', '', '', 1, 'S'),
(8, 'adrian@ucm.es', '$2a$08$yobEY52jl8G2FpN6Nhd7nOLVjNdn96A1GWGQwHuJFREpmMcsUye9G', 'adrian', 'riesco', '', '', 1, 'A'),
(9, 'luis@ucm.es', '$2a$08$yobEY52jl8G2FpN6Nhd7nOLVjNdn96A1GWGQwHuJFREpmMcsUye9G', 'LuisJ', 'Jaramillo', 0x433a5c66616b65706174685c616c61736b612e6a7067, 'http://localhost:3001/multimedia/users/9/user9.jpg', 1, 'S'),
(10, 'stefano@ucm.es', '$2a$08$yobEY52jl8G2FpN6Nhd7nOLVjNdn96A1GWGQwHuJFREpmMcsUye9G', 'Stefano', 'Flores', '', '', 1, 'S'),
(16, 'pedro@ucm.es', '$2a$08$/fYrEGbexRF6udkEeon5CuNNhyzfex0iX/8rMafYfbW5YrayYwp6e', 'Pedro', 'Suárez', '', '', 1, 'S'),
(22, 'verocalz@ucm.es', '$2a$08$lgCGabRYw.tBLr1YpYvbhevYwqtR/4H0O1vLTojIE55hpU79OIBWu', 'Veronica', 'Calzada', '', '', 1, 'S'),
(23, 'jaime@ucm.es', '$2a$08$PIaxHyktmBi0.UOWUWjJDOJgNf1EHe7IkjvC.w3sK4g.CUnhGQ0Au', 'Jaime', 'Madriñan', '', '', 1, 'T');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `desafio`
--
ALTER TABLE `desafio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `indexGrupo` (`idGrupo`) USING BTREE,
  ADD KEY `indexCategoria` (`idCategoria`) USING BTREE;

--
-- Indices de la tabla `enlacedesafio`
--
ALTER TABLE `enlacedesafio`
  ADD KEY `idDesafio` (`idDesafio`);

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idGrupo` (`idGrupo`),
  ADD KEY `idCreador` (`idCreador`);

--
-- Indices de la tabla `equipoestudiante`
--
ALTER TABLE `equipoestudiante`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEquipo` (`idEquipo`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `escrito`
--
ALTER TABLE `escrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `indexDesafio` (`idDesafio`) USING BTREE,
  ADD KEY `indexGrupo` (`idGrupo`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD KEY `idEquipo` (`idEquipo`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idprofesor` (`idprofesor`);

--
-- Indices de la tabla `grupoestudiante`
--
ALTER TABLE `grupoestudiante`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`),
  ADD KEY `idGrupo` (`idGrupo`);

--
-- Indices de la tabla `mensajeria`
--
ALTER TABLE `mensajeria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `indexEmisor` (`idEmisor`) USING BTREE,
  ADD KEY `indexReceptor` (`idReceptor`) USING BTREE,
  ADD KEY `indexGrupo` (`idGrupo`) USING BTREE;

--
-- Indices de la tabla `multimediadesafio`
--
ALTER TABLE `multimediadesafio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `indexDesafio` (`idDesafio`);

--
-- Indices de la tabla `multimediaescrito`
--
ALTER TABLE `multimediaescrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `indexDesafio` (`idDesafio`) USING BTREE;

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `desafio`
--
ALTER TABLE `desafio`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=434;

--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `equipoestudiante`
--
ALTER TABLE `equipoestudiante`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;

--
-- AUTO_INCREMENT de la tabla `escrito`
--
ALTER TABLE `escrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT de la tabla `grupo`
--
ALTER TABLE `grupo`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `grupoestudiante`
--
ALTER TABLE `grupoestudiante`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `mensajeria`
--
ALTER TABLE `mensajeria`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `multimediadesafio`
--
ALTER TABLE `multimediadesafio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=249;

--
-- AUTO_INCREMENT de la tabla `multimediaescrito`
--
ALTER TABLE `multimediaescrito`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `desafio`
--
ALTER TABLE `desafio`
  ADD CONSTRAINT `desafio_ibfk_1` FOREIGN KEY (`idGrupo`) REFERENCES `grupo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `desafio_ibfk_2` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `enlacedesafio`
--
ALTER TABLE `enlacedesafio`
  ADD CONSTRAINT `enlacedesafio_ibfk_1` FOREIGN KEY (`idDesafio`) REFERENCES `desafio` (`id`);

--
-- Filtros para la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD CONSTRAINT `equipo_ibfk_1` FOREIGN KEY (`idGrupo`) REFERENCES `grupo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `equipo_ibfk_2` FOREIGN KEY (`idCreador`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `equipoestudiante`
--
ALTER TABLE `equipoestudiante`
  ADD CONSTRAINT `equipoestudiante_ibfk_1` FOREIGN KEY (`idEquipo`) REFERENCES `equipo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `equipoestudiante_ibfk_2` FOREIGN KEY (`idEstudiante`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `escrito`
--
ALTER TABLE `escrito`
  ADD CONSTRAINT `escrito_ibfk_1` FOREIGN KEY (`idDesafio`) REFERENCES `desafio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`idEquipo`) REFERENCES `equipo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `estudiante_ibfk_2` FOREIGN KEY (`id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD CONSTRAINT `grupo_ibfk_1` FOREIGN KEY (`idprofesor`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `grupoestudiante`
--
ALTER TABLE `grupoestudiante`
  ADD CONSTRAINT `grupoestudiante_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `grupoestudiante_ibfk_2` FOREIGN KEY (`idGrupo`) REFERENCES `grupo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `mensajeria`
--
ALTER TABLE `mensajeria`
  ADD CONSTRAINT `grupo_ibfk_3` FOREIGN KEY (`idGrupo`) REFERENCES `grupo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mensajeria_ibfk_1` FOREIGN KEY (`idEmisor`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mensajeria_ibfk_2` FOREIGN KEY (`idReceptor`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `multimediadesafio`
--
ALTER TABLE `multimediadesafio`
  ADD CONSTRAINT `multimediadesafio_ibfk_1` FOREIGN KEY (`idDesafio`) REFERENCES `desafio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `multimediaescrito`
--
ALTER TABLE `multimediaescrito`
  ADD CONSTRAINT `multimediaescrito_ibfk_1` FOREIGN KEY (`idDesafio`) REFERENCES `desafio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
