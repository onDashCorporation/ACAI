use onDash;

-- INSERTS NAS TABELAS, APENAS PARA TESTE -- 

insert into usuarios (usuId, nome, email, senha, fk_cargoId) values (1, 'Alanah Raiston', 'araiston0@livejournal.com', 'uR7(TBZ''', 1);
SELECT * FROM usuarios;
insert into usuarios (usuId, nome, email, senha, fk_cargoId) values (2, 'Dominik Swiffen', 'dswiffen1@blogger.com', 'eG5@\|>K@j', 2);
insert into usuarios (usuId, nome, email, senha, fk_cargoId) values (3, 'Hobard Blaxeland', 'hblaxeland2@howstuffworks.com', 'vD9$XpO+fT', 2);
insert into usuarios (id, cargo, nome, email, senha) values (4, 1, 'Marie-ann Screase', 'mscrease3@bloglines.com', 'iB4$nFS>{S=');
insert into usuarios (id, cargo, nome, email, senha) values (5, 3, 'Tannie Wallett', 'twallett4@lulu.com', 'eO0%qKU1c');
insert into usuarios (id, cargo, nome, email, senha) values (6, 3, 'Sarina Landor', 'slandor5@multiply.com', 'bF7/w}i4O5?wv)>');

insert into cargos(cargoId, cargo_nome) VALUES
(1, 'auxiliar'),
(2, 'gestor'),
(3, 'solicitante');
SELECT * FROM cargos;

-- 1, auxiliar
-- 2, gestor
-- 3, solicitante

insert into auxiliar (fk_usuId, fk_cargoId) values (1, 1);
insert into auxiliar (fk_usuId, fk_cargoId) values (2, 1);

insert into gestor (fk_usuId, fk_cargoId) values (3, 2);
insert into gestor (fk_usuId, fk_cargoId) values (3, 3);

insert into solicitante (id, usuId) values(1, 5);
insert into solicitante (id, usuId) values(2, 6);
