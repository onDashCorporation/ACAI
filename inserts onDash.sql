use onDash;

-- inserts das tabelas -- 


-- todos os inserts ligados com os usuarios dos nossos sistemas
SELECT * FROM cargos;
insert into cargos(cargoId, cargo_nome) VALUES
(1, 'auxiliar'),
(2, 'gestor'),
(3, 'solicitante');


insert into usuarios (usuId, nome, email, senha, fk_cargoId) values (1, 'Alanah Raiston', 'araiston0@livejournal.com', 'uR7(TBZ''', 1);
insert into usuarios (usuId, nome, email, senha, fk_cargoId) values (2, 'Judah', 'jgatherell0@cbslocal.com', 'Gatherell', 1);

insert into usuarios (usuId, nome, email, senha, fk_cargoId) values (3, 'Ario', 'acardnell0@acquirethisname.com', 'gK9`}5\Zb{yk', 2);
insert into usuarios (usuId, nome, email, senha, fk_cargoId) values (4, 'Merwin', 'mpencot1@home.pl', 'fN9/F(n~fM', 2);

insert into usuarios (usuId, nome, email, senha, fk_cargoId) values (5, 'Phyllys', 'pjillins2@vinaora.com', 'kV8#*7B/,6`i36', 3);
insert into usuarios (usuId, nome, email, senha, fk_cargoId) values (6, 'Erica', 'egarman3@spotify.com', 'lE2@mngIB', 3);



insert into auxiliar (fk_usuId, fk_cargoId) values (1, 1);
insert into auxiliar (fk_usuId, fk_cargoId) values (2, 1);


insert into gestor (fk_usuId, fk_cargoId) values (3, 2);
insert into gestor (fk_usuId, fk_cargoId) values (4, 2);

insert into solicitante (fk_usuId, fk_cargoId) values(5, 3);
insert into solicitante (fk_usuId, fk_cargoId) values(6, 3);


-- todos os inserts ligados com a tabela de categoria
insert into categoria(id, nome) values(1, 'periféricos');

insert into item(id, foto, nome, qtde, valor, qtdMin, fk_categoriaId) values (1, '', 'mouse logitech', 80, 135.00, 10, 1);
select * from item;

insert into produto(id, fk_itemId) values(1, 1);

insert into estoque (id, nome, qtdeTotal, fk_categoriaId, fk_tipoMoviId, fk_produtoId, fk_itemId) values (1,'Mouse Logitech', 80, 1, 1, 1, 1);


select * from produto;

-- inserts ligados aos tipos de movimentações 
insert into tipomovi(id, tipo) values
(1, 'entrada'),
(2, 'saída');

insert into solicitacaoProd(id, data, fk_produtoId, qtde, preco, fk_itemId, fk_tipoMoviId) values
(1, '2024-03-27' , 1, 50, 135.00, 1, 1);

select * from solicitacaoProd;