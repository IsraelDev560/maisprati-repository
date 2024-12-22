CREATE SCHEMA IF NOT EXISTS `exercicio03` DEFAULT CHARACTER SET utf8;
USE `exercicio03`;

CREATE TABLE IF NOT EXISTS `exercicio03`.`alunos`(
`aluno_id` INT NOT NULL AUTO_INCREMENT,
`codigo_matricula` INT NOT NULL,
`data_matricula` DATE NOT NULL,
`nome` VARCHAR(255) NOT NULL,
`endereco` VARCHAR(100) NOT NULL,
`telefone`VARCHAR(15) NOT NULL,
`data_nasc` DATE NOT NULL,
`altura` DECIMAL(3,2) NOT NULL,
`peso` DECIMAL(5,2) NOT NULL,
PRIMARY KEY(`aluno_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `exercicio03`.`turma` (
  `turma_id` INT NOT NULL AUTO_INCREMENT,
  `nome_turma` VARCHAR(255) NOT NULL,
  `quantidade_aluno` INT NOT NULL,
  `horario` VARCHAR(40) NOT NULL,
  `duracao_aula` VARCHAR(20) NOT NULL,
  `data_inicial` DATE NOT NULL,
  `data_final` DATE NOT NULL,
  `tipo_curso` VARCHAR(150) NOT NULL,
  `aluno_monitor` INT,
  FOREIGN KEY(`aluno_monitor`) REFERENCES `exercicio03`.`alunos`(`aluno_id`),
  PRIMARY KEY (`turma_id`),
  UNIQUE (`aluno_monitor`)
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `exercicio03`.`aluno_turma` (
  `aluno_turma_id` INT NOT NULL AUTO_INCREMENT,
  `aluno_id` INT NOT NULL,
  `turma_id` INT NOT NULL,
  `ausencias` INT DEFAULT 0,
  PRIMARY KEY (`aluno_turma_id`),
  FOREIGN KEY (`aluno_id`) REFERENCES `exercicio03`.`alunos`(`aluno_id`),
  FOREIGN KEY (`turma_id`) REFERENCES `exercicio03`.`turma`(`turma_id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `exercicio03`.`professor` (
  `professor_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL UNIQUE,
  `data_nasc` DATE NOT NULL,
  `titulacao` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`professor_id`)
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `exercicio03`.`professor_turma` (
  `professor_turma_id` INT NOT NULL AUTO_INCREMENT,
  `professor_id` INT NOT NULL,
  `turma_id` INT NOT NULL,
  PRIMARY KEY (`professor_turma_id`),
  FOREIGN KEY (`professor_id`) REFERENCES `exercicio03`.`professor`(`professor_id`),
  FOREIGN KEY (`turma_id`) REFERENCES `exercicio03`.`turma`(`turma_id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `exercicio03`.`telefone_professor`(
  `telefone_id` INT NOT NULL AUTO_INCREMENT,
  `professor_id` INT NOT NULL,
  `telefone` VARCHAR(15) NOT NULL,
  FOREIGN KEY(`professor_id`) REFERENCES `exercicio03`.`professor`(`professor_id`),
  PRIMARY KEY(`telefone_id`)
)
ENGINE = InnoDB;


INSERT INTO `exercicio03`.`alunos` (`codigo_matricula`, `data_matricula`, `nome`, `endereco`, `telefone`, `data_nasc`, `altura`, `peso`)
VALUES 
(1001, '2023-01-10', 'João da Silva', 'Rua A, 123', '8499990000', '2005-03-15', 1.75, 70.5),
(1002, '2023-02-12', 'Maria Oliveira', 'Rua B, 456', '8499991111', '2006-07-20', 1.62, 58.3),
(1003, '2023-03-05', 'Pedro Souza', 'Rua C, 789', '8499992222', '2004-09-25', 1.80, 75.0);


INSERT INTO `exercicio03`.`turma` (`nome_turma`, `quantidade_aluno`, `horario`, `duracao_aula`, `data_inicial`, `data_final`, `tipo_curso`, `aluno_monitor`)
VALUES 
('Turma A', 20, '08:00-10:00', '2 horas', '2023-01-15', '2023-06-15', 'Introdução à Informática', 1),
('Turma B', 15, '10:00-12:00', '2 horas', '2023-02-01', '2023-07-01', 'Programação em Python', 2),
('Turma C', 25, '14:00-16:00', '2 horas', '2023-03-01', '2023-08-01', 'Desenvolvimento Web', 3);


INSERT INTO `exercicio03`.`professor` (`nome`, `cpf`, `data_nasc`, `titulacao`)
VALUES 
('Carlos Almeida', '123.456.789-00', '1980-05-22', 'Mestre em Informática'),
('Ana Paula', '987.654.321-00', '1975-11-30', 'Ciências da Computação'),
('Roberto Nunes', '456.123.789-00', '1985-08-12', 'Programação');


INSERT INTO `exercicio03`.`professor_turma` (`professor_id`, `turma_id`) 
VALUES 
(1, 1),  -- Carlos Almeida orientando Turma A
(2, 2),  -- Ana Paula orientando Turma B
(3, 3);  -- Roberto Nunes orientando Turma C


INSERT INTO `exercicio03`.`telefone_professor` (`professor_id`, `telefone`) 
VALUES 
(1, '87999112233'),  -- Telefone de Carlos Almeida
(1, '87999223344'),
(2, '87999334455'),  -- Telefone de Ana Paula
(3, '87999445566'),  -- Telefone de Roberto Nunes
(3, '87999556677');


INSERT INTO `exercicio03`.`aluno_turma` (`aluno_id`, `turma_id`, `ausencias`)
VALUES 
(1, 1, 2),  -- João da Silva na Turma A com 2 ausências
(2, 2, 0),  -- Maria Oliveira na Turma B sem ausências
(3, 3, 1),  -- Pedro Souza na Turma C com 1 ausência
(1, 2, 3);  -- João da Silva também matriculado na Turma B com 3 ausências

-- 1: Listar os dados dos alunos;

SELECT * FROM alunos;

-- 2: Listar os dados dos alunos e as turmas que eles estão matriculados;

SELECT 
    a.aluno_id,
    a.codigo_matricula,
    a.data_matricula,
    a.nome AS nome_aluno,
    a.endereco,
    a.telefone,
    a.data_nasc,
    a.altura,
    a.peso,
    t.turma_id,
    t.nome_turma,
    t.quantidade_aluno,
    t.horario,
    t.duracao_aula,
    t.data_inicial,
    t.data_final,
    t.tipo_curso 
FROM 
    `exercicio03`.`alunos` AS a 
INNER JOIN 
    `exercicio03`.`aluno_turma` AS at ON a.aluno_id = at.aluno_id 
INNER JOIN 
    `exercicio03`.`turma` AS t ON at.turma_id = t.turma_id;

-- 3: Listar os alunos que não possuem faltas;
SELECT a.nome, al.ausencias FROM `exercicio03`.`alunos` AS a  
INNER JOIN `aluno_turma` al ON al.aluno_id = a.aluno_id 
WHERE al.ausencias = 0 
GROUP BY a.nome, al.ausencias;

-- 4: Listar os professores e a quantidade de turmas que cada um leciona;
SELECT p.nome, COUNT(pt.turma_id) AS quantidade_turmas 
FROM `exercicio03`.`professor` AS p 
INNER JOIN `exercicio03`.`professor_turma` AS pt ON p.professor_id = pt.professor_id 
GROUP BY p.nome;

-- 5: Listar nome dos professores, apenas um dos números de telefone do professor,
-- dados (id da turma, data início, data fim e horário) das turmas que o professor
-- leciona, curso da turma e alunos matriculados ordenado por nome do professor,
-- id turma e nome do aluno;
SELECT 
    p.nome AS nome_professor, 
    MIN(tp.telefone) AS telefone_professor,
    t.turma_id, 
    t.data_inicial, 
    t.data_final, 
    t.horario, 
    t.tipo_curso, 
    a.nome AS nome_aluno 
FROM 
    `exercicio03`.`professor` AS p 
INNER JOIN 
    `exercicio03`.`telefone_professor` AS tp ON p.professor_id = tp.professor_id 
INNER JOIN 
    `exercicio03`.`professor_turma` AS pt ON p.professor_id = pt.professor_id 
INNER JOIN 
    `exercicio03`.`turma` AS t ON pt.turma_id = t.turma_id 
INNER JOIN 
    `exercicio03`.`aluno_turma` AS at ON t.turma_id = at.turma_id 
INNER JOIN 
    `exercicio03`.`alunos` AS a ON at.aluno_id = a.aluno_id 
GROUP BY 
    p.nome, t.turma_id, a.nome 
ORDER BY 
    nome_professor, t.turma_id, nome_aluno;

-- 6: Alterar o nome de todos os professores para maiúsculo;2) Colocar o nome de todos
-- os alunos que estão na turma com o maior número de alunos em maiúsculo;
UPDATE `exercicio03`.`professor` SET nome = UPPER(nome);
UPDATE `exercicio03`.`alunos` AS a 
INNER JOIN `exercicio03`.`aluno_turma` AS at ON a.aluno_id = at.aluno_id 
INNER JOIN `exercicio03`.`turma` AS t ON at.turma_id = t.turma_id 
SET a.nome = UPPER(a.nome) 
WHERE t.quantidade_aluno = (
    SELECT MAX(quantidade_aluno) 
    FROM `exercicio03`.`turma`
);

-- 7: Excluir as ausências dos alunos nas turmas que estes são monitores;

DELETE at
FROM `exercicio03`.`aluno_turma` AS at
INNER JOIN `exercicio03`.`turma` AS t ON at.turma_id = t.turma_id
WHERE at.aluno_id = t.aluno_monitor;
