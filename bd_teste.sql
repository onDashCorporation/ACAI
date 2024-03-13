CREATE DATABASE teste;
USE teste;

-- CRIAÇÃO DAS TABELAS FORTES/INDEPENDENTES --

create table usuarios(
	id int primary key not null,
    cargo enum('auxiliar', 'gestor', 'solicitante'),
    nome varchar(100),
    email varchar(200),
    senha varchar(20)
);

create table tipomovi(
	id int primary key not null,
    tipo enum('entrada', 'saida')
);

create table categoria(
	id int primary key not null,
    nome varchar(100)
);

-- CRIAÇÃO DAS TABELAS FRACAS/DEPENDENTES --


-- TABELAS DEPENDENTES DA TABELA USUARIOS
create table auxiliar(
	id int primary key not null,
    usuId int not null,
    
    foreign key (usuId) references usuarios(id)
);

create table gestor(
	id int primary key not null,
    usuId int not null,
    
    foreign key (usuId) references usuarios(id)
);

create table solicitante(
	id int primary key not null,
    usuId int not null,
    
    foreign key (usuId) references usuarios(id)
);

-- TABELAS DEPENDETES DA TABELA CATEGORIA --
create table item(
	id int primary key not null,
    foto blob,
    nome varchar(150),
    qtde int,
    valor decimal(8,2),
    qtdMin int default(0) not null,
    fk_categoriaId int not null,
    
    FOREIGN KEY (fk_categoriaId) references categoria(id)
);

create table produto(
	id int primary key not null,
    fk_itemId int not null,
    
    FOREIGN KEY(fk_itemId) references item(id) -- tabela produto depende da tabela de item que tem ligação com a categoria.
);

-- TABELA DEPENDENTE DA TABELA tipomovi, categoria e produto

create table estoque(
	id int primary key not null,
    nome varchar(100),
    qtdeTotal int,
    fk_categoriaId int not null,
    fk_tipoMoviId int not null,
    fk_produtoId int not null,
    -- necessitaria da fk do item tambem, para ver quantos itens tem no total --
    
    foreign key (fk_categoriaId) references categoria(id),
    foreign key (fk_tipoMoviId) references tipomovi(id),
    foreign key (fk_produtoId) references produto(id)
); -- essa tabela será uma view de todos os produtos existentes e todos as movimentações feitas --

-- TABELA DEPENDENTE DE TUDO RELACIONADO AO USUARIO, TIPOMOVI, PRODUTO E ITEM --
create table solicitacaoProd(
	id int not null primary key,
    data date,
    fk_produtoId int not null,
    qtde int,
    preco decimal,
    fk_itemId int not null,
    fk_tipoMoviId int not null,
    
    foreign key (fk_tipoMoviId) references tipomovi(id),
    foreign key (fk_produtoId) references produto(id),
    foreign key (fk_itemId) references item(id)
);

-- TABELA DEPENDENTE DA TABELA DE SOLICITACAO DE PRODUTO -- 

create table controle(
	id int not null primary key,
    qtdSaida int,
    qtdEntrada int,
    precoMedio decimal,
    fk_solicitacaoId int not null,
    
    foreign key (fk_solicitacaoId) references solicitacaoProd(id)
);

