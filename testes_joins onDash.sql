use onDash;

-- FAZENDO OS JOINS DAS TABELAS --

SELECT * 
FROM usuarios
INNER JOIN auxiliar ON usuarios.id = auxiliar.usuId;

SELECT *
FROM usuarios
INNER JOIN gestor on usuarios.id = gestor.usuId;

