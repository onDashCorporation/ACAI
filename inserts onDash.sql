use onDash;

-- INSERTS NAS TABELAS, APENAS PARA TESTE -- 

insert into usuarios (id, cargo, nome, email, senha) values (1, 2, 'Alanah Raiston', 'araiston0@livejournal.com', 'uR7(TBZ''');
insert into usuarios (id, cargo, nome, email, senha) values (2, 2, 'Dominik Swiffen', 'dswiffen1@blogger.com', 'eG5@\|>K@j');
insert into usuarios (id, cargo, nome, email, senha) values (3, 1, 'Hobard Blaxeland', 'hblaxeland2@howstuffworks.com', 'vD9$XpO+fT');
insert into usuarios (id, cargo, nome, email, senha) values (4, 1, 'Marie-ann Screase', 'mscrease3@bloglines.com', 'iB4$nFS>{S=');
insert into usuarios (id, cargo, nome, email, senha) values (5, 3, 'Tannie Wallett', 'twallett4@lulu.com', 'eO0%qKU1c');
insert into usuarios (id, cargo, nome, email, senha) values (6, 3, 'Sarina Landor', 'slandor5@multiply.com', 'bF7/w}i4O5?wv)>');

insert into auxiliar (id, usuId) values (1, 3);
insert into auxiliar (id, usuId) values (2, 4);

insert into gestor (id, usuId) values (1, 1);
insert into gestor (id, usuId) values (2, 2);

insert into solicitante (id, usuId) values(1, 5);
insert into solicitante (id, usuId) values(2, 6);
