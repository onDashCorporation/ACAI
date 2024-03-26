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

SELECT 
	i.id, i.foto, i.nome, i.qtde, i.valor, i.qtdMin, c.id, c.nome, p.id
FROM 
	item as i
INNER JOIN
	categoria as c on i.id = c.id
INNER JOIN
	produto as p on i.id = p.id;

    
    
-- view e join da tabela estoque, dependente da tabela de tipomovi, categoria, produto e item
CREATE VIEW vw_produtos AS
SELECT
    estoque.id, 
    estoque.nome, 
    estoque.qtdeTotal, 
    categoria.nome AS categoria_nome, 
    tipomovi.tipo AS tipo_movimento, 
    produto.id AS id_produto, 
    item.nome AS nome_item,
    item.qtde AS quantidade_item
FROM 
    estoque 
INNER JOIN 
    categoria ON estoque.fk_categoriaId = categoria.id
INNER JOIN 
    tipomovi ON estoque.fk_tipoMoviId = tipomovi.id
INNER JOIN 
    produto ON estoque.fk_produtoId = produto.id
INNER JOIN 
    item ON estoque.fk_itemId = item.id;

-- joins da tabela de solicitacao deproduto
SELECT
    solicitacaoProd.id, solicitacaoProd.data, solicitacaoProd.qtde, solicitacaoProd.preco, item.nome AS item_nome
FROM
    solicitacaoProd
INNER JOIN
    produto ON solicitacaoProd.fk_produtoId = produto.id
INNER  JOIN
    item ON solicitacaoProd.fk_itemId = item.id;
    
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