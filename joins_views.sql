use onDash;

-- FAZENDO OS JOINS E VIEWS DAS TABELAS --


-- 	TODOS OS JOINS RELACIONADOS AOS USUARIOS
-- 	VER TODOS OS USUARIOS JUNTOS
SELECT 
    u.usuId,
    u.nome AS nome_usuario,
    u.email,
    u.senha,
    c.cargoId,
    c.cargo_nome
FROM 
    usuarios u
INNER JOIN 
    cargos c ON u.fk_cargoId = c.cargoId;


--  VER OS USUARIOS QUE SAO AUXILIARES
SELECT 
    u.usuId, u.nome, u.email, u.senha, c.cargoId, c.cargo_nome
FROM 
    usuarios AS u
INNER JOIN 
    auxiliar AS a ON u.usuId = a.fk_usuId
INNER JOIN 
    cargos AS c ON c.cargoId = a.fk_cargoId;

    
--  VER OS USUARIOS QUE SAO OS GESTORES
SELECT 
	u.usuId, u.nome, u.email, u.senha, c.cargoId, c.cargo_nome
FROM 
	usuarios as u
INNER JOIN 
	gestor as g on u.usuId = g.fk_usuId
INNER JOIN 
	cargos as c on c.cargoId = g.fk_cargoId;
    
    
-- 	 VER OS USUARIOS QUE SAO SOLICITANTES
SELECT 
	 u.usuId, u.nome, u.email, u.senha, c.cargoId, c.cargo_nome
FROM 
    usuarios AS u
INNER JOIN 
    solicitante AS s ON u.usuId = s.fk_usuId
INNER JOIN 
	cargos as c on c.cargoId = s.fk_cargoId;


-- JOINS RELACIONADOS A CATEGORIAS

-- VER TODOS OS ITENS COM SUAS CATEGORIAS
SELECT 
	i.id, i.foto, i.nome, i.qtde, i.valor, i.qtdMin, c.id, c.nome
FROM 
	item as i
INNER JOIN
	categoria as c on i.id = c.id;
    
-- VER ITEM, PRODUTO E CATEGORIA

SELECT 
	i.id, i.foto, i.nome, i.qtde, i.valor, i.qtdMin, c.id, c.nome, p.id
FROM 
	item as i
INNER JOIN
	categoria as c on i.id = c.id
INNER JOIN
	produto as p on i.id = p.id;

    
    
-- view e join da tabela estoque, dependente da tabela de tipomovi, categoria, produto e item
CREATE VIEW view_estoque AS
SELECT 
    e.id AS estoque_id,
    e.nome AS nome_produto,
    e.qtdeTotal,
    c.nome AS nome_categoria,
    tm.tipo AS tipo_movimentacao
FROM 
    estoque e
JOIN 
    categoria c ON e.fk_categoriaId = c.id
JOIN 
    tipomovi tm ON e.fk_tipoMoviId = tm.id;
    
SELECT * FROM view_estoque;

SELECT * from vw_produtos;
-- joins da tabela de solicitacao deproduto
SELECT 
    sp.id AS solicitacao_id,
    sp.data,
    p.nome AS nome_produto,
    sp.qtde,
    sp.preco,
    i.nome AS nome_item,
    tm.tipo AS tipo_movimentacao
FROM 
    solicitacaoProd as sp
JOIN 
    produto as p ON sp.fk_produtoId = p.id
JOIN 
    item as i ON sp.fk_itemId = i.id
JOIN 
    tipomovi as tm ON sp.fk_tipoMoviId = tm.id;
    
-- view e joins da tabela de controle

CREATE VIEW controleView AS
SELECT
    controle.id,
    controle.qtdSaida,
    controle.qtdEntrada,
    controle.precoMedio,
    controle.fk_solicitacaoId,
    solicitacaoProd.data,
    solicitacaoProd.qtde,
    solicitacaoProd.preco,
    solicitacaoProd.fk_produtoId,
    solicitacaoProd.fk_itemId,
    solicitacaoProd.fk_tipoMoviId
FROM
    controle
JOIN
    solicitacaoProd ON controle.fk_solicitacaoId = solicitacaoProd.id;
    
SELECT * from controleView;