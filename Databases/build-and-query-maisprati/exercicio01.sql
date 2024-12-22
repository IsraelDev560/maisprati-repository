CREATE SCHEMA IF NOT EXISTS `exercicio01` DEFAULT CHARACTER SET utf8 ;
USE `exercicio01` ;

CREATE TABLE IF NOT EXISTS `exercicio01`.`aluno` (
  `aluno_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `curso` VARCHAR(100) NOT NULL,
  `nivel` INT NOT NULL,
  `idade` INT NOT NULL,
  PRIMARY KEY (`aluno_id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `exercicio01`.`turma` (
  `turma_id` INT NOT NULL AUTO_INCREMENT,
  `nometurma` VARCHAR(255) NOT NULL,
  `sala` INT NOT NULL,
  `horario` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`turma_id`)
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `exercicio01`.`matricula` (
  `matricula_id` INT NOT NULL AUTO_INCREMENT,
  `aluno_id` INT NOT NULL,
  `turma_id` INT NOT NULL,
  `nota_1` DOUBLE NOT NULL,
  `nota_2` DOUBLE NOT NULL,
  `nota_3` DOUBLE NOT NULL,
  `nota_final` DOUBLE NOT NULL,
  `nr_faltas` INT NOT NULL,
  PRIMARY KEY (`matricula_id`),
   FOREIGN KEY (`aluno_id`)
    REFERENCES `exercicio`.`aluno` (`aluno_id`),
    FOREIGN KEY (`turma_id`) 
    REFERENCES `exercicio`.`turma` (`turma_id`)
)
ENGINE = InnoDB;

-- 1: Quais os nomes de todos os alunos ?
SELECT `nome` FROM `aluno`;

-- 2: Quais os números das matrículas dos alunos ?
SELECT a.nome, m.matricula_id 
FROM aluno a
INNER JOIN matricula m ON m.aluno_id = a.aluno_id;

-- 3: Quais os números das matrículas dos alunos que não estão matriculados em uma turma ?
SELECT m.matricula_id
FROM matricula m
INNER JOIN turma t ON m.turma_id = t.turma_id
WHERE t.turma_id IS NULL;

-- 4: Quais os números dos alunos matriculados em uma turma de número '30'?
SELECT m.aluno_id FROM matricula m WHERE m.turma_id = 30;

-- 5: Qual o horário da turma do aluno 'PERNA LONGA'
SELECT t.horario, a.nome FROM aluno a 
INNER JOIN matricula m ON a.aluno_id = m.aluno_id 
INNER JOIN turma t ON m.turma_id = t.turma_id 
WHERE a.nome LIKE 'PERNA LONGA';

-- 6: Quais os nomes dos alunos matriculados em uma turma de número '30'?
SELECT a.nome FROM matricula m 
INNER JOIN aluno a ON m.aluno_id = a.aluno_id 
WHERE m.turma_id = (SELECT turma_id FROM turma WHERE nometurma = 'Turma Do ID 30');

-- 7: Quais os nomes dos alunos que não estão matriculados na turma de número '30'?
SELECT nome 
FROM aluno 
WHERE aluno_id NOT IN (
    SELECT aluno_id 
    FROM matricula 
    WHERE turma_id = (SELECT turma_id FROM turma WHERE nometurma = 'Turma Do ID 30')
);

-- 8: Quais os nomes das turmas com alunos com nota final maior que 8?
SELECT DISTINCT t.nometurma 
FROM matricula m 
JOIN turma t ON m.turma_id = t.turma_id 
WHERE m.nota_final > 8;

INSERT INTO `aluno` (nome, curso, nivel, idade) VALUES( 'Israel', 'JEEEVA', 2, 19);
INSERT INTO `aluno` (nome, curso, nivel, idade) VALUES( 'Dênis', 'JEEEVA AND PHYTARAM', 3, 22);
INSERT INTO `aluno` (nome, curso, nivel, idade) VALUES( 'Ale', 'JEEEVA', 2, 30);
INSERT INTO `aluno` (nome, curso, nivel, idade) VALUES( 'Vitti', 'FULL STACK', 4, 21);
INSERT INTO `aluno` (nome, curso, nivel, idade) VALUES( 'Henrique', 'FULL STACK', 5, 30);
INSERT INTO `aluno` (nome, curso, nivel, idade) VALUES( 'PERNA LONGA', 'CORREDOR', 5, 30);
INSERT INTO `aluno` (nome, curso, nivel, idade) VALUES( 'PERNA BAMBA', 'BAMBO', 7, 100);

INSERT INTO `turma` (nometurma, sala, horario ) VALUES ("Turma 1", 1, "09:00 - 12:00"); 
INSERT INTO `turma` (nometurma, sala, horario ) VALUES ("Turma 1", 1, "09:00 - 12:00"); 
INSERT INTO `turma` (nometurma, sala, horario ) VALUES ("Turma 2", 2, "09:00 - 12:00"); 
INSERT INTO `turma` (nometurma, sala, horario ) VALUES ("Turma 2", 2, "09:00 - 12:00"); 
INSERT INTO `turma` (nometurma, sala, horario ) VALUES ("Turma 1", 1, "09:00 - 12:00"); 
INSERT INTO `turma` (nometurma, sala, horario ) VALUES ("Turma Do PERNA LONGA", 1, "09:00 - 12:00"); 
INSERT INTO `turma` (nometurma, sala, horario ) VALUES ("Turma Do ID 30", 6, "09:00 - 12:00"); 

INSERT INTO `matricula` (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) 
VALUES (1, 1, 8.5, 9.0, 8.0, 8.5, 0);  -- Israel matriculado na Turma 1
INSERT INTO `matricula` (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) 
VALUES (2, 2, 8.5, 9.0, 8.0, 8.7, 0);    -- Dênis matriculado na Turma 2
INSERT INTO `matricula` (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) 
VALUES (3, 1, 8.5, 9.0, 8.0, 7.5, 0);  -- Ale matriculado na Turma 1
INSERT INTO `matricula` (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) 
VALUES (4, 3, 8.5, 9.0, 8.0, 9.5, 0);  -- Vitti matriculado na Turma 3
INSERT INTO `matricula` (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) 
VALUES (5, 3, 8.5, 9.0, 8.0, 8.5, 0);  -- Henrique matriculado na Turma 3
INSERT INTO `matricula` (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) 
VALUES (6, 6, 8.5, 9.0, 8.0, 6, 0);  -- PERNA LONGA matriculado na Turma 6
INSERT INTO `matricula` (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) 
VALUES (7, 7, 8.5, 9.0, 8.0, 9.25, 0);  -- PERNA BAMBA matriculado na Turma 7

SELECT * FROM turma;

SELECT a.*, m.*, t.* 
FROM aluno a 
INNER JOIN matricula m ON a.aluno_id = m.aluno_id 
INNER JOIN turma t ON m.turma_id = t.turma_id 
WHERE a.nome = "PERNA BAMBA";

SELECT a.*, m.*, t.* 
FROM aluno a 
INNER JOIN matricula m ON a.aluno_id = m.aluno_id 
INNER JOIN turma t ON m.turma_id = t.turma_id;



