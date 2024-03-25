use onDash;

-- FAZENDO OS JOINS E VIEWS DAS TABELAS --

--  joins das tabelas de usuarios do nosso sistema

SELECT * 
FROM cargos
INNER JOIN usuarios on cargos.cargoId = usuarios.usuId;


SELECT * 
FROM usuarios AS u
INNER JOIN auxiliar AS a ON u.usuId = a.fk_usuId
INNER JOIN cargos AS c ON c.cargoId = a.fk_cargoId;

SELECT *
FROM usuarios as u
INNER JOIN gestor as g on u.usuId = g.fk_usuId
INNER JOIN cargos as c on c.cargoId = g.fk_cargoId;

SELECT *
FROM usuarios
INNER JOIN solicitante on usuarios.id = solicitante.usuId;



-- joins das tabelas dependentes da tabela categoria
SELECT *
FROM categoria
INNER JOIN item ON categoria.id = item.fk_categoriaId; -- categoria e item

SELECT *
FROM item
INNER JOIN produto ON item.id = produto.fk_itemId; -- item e produto


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