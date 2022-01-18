CREATE SCHEMA `bibliotecadb` ;

USE `bibliotecadb` ;

CREATE TABLE `bibliotecadb`.`livro` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `edicao` INT NULL,
  `genero` VARCHAR(45) NOT NULL,
  `autor` VARCHAR(45) NOT NULL,
  `lido` TINYINT NULL,
  `adaptado` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `bibliotecadb`.`filme` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `ano` INT NOT NULL,
  `duracao` VARCHAR(45) NULL,
  `genero` VARCHAR(45) NOT NULL,
  `assistido` TINYINT NULL,
  `adaptado` INT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `adaptado`
    FOREIGN KEY (`id`)
    REFERENCES `bibliotecadb`.`livro` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `bibliotecadb`.`serie` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `ano` INT NOT NULL,
  `temporadas` INT NULL,
  `genero` VARCHAR(45) NOT NULL,
  `assistido` TINYINT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `bibliotecadb`.`curso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `materia` VARCHAR(45) NOT NULL,
  `professor` VARCHAR(45) NOT NULL,
  `duracao` INT NULL,
  PRIMARY KEY (`id`));
  GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'