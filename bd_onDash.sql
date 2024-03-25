CREATE DATABASE onDash;
DROP DATABASE onDash;
USE onDash;

-- CRIAÇÃO DAS TABELAS FORTES/INDEPENDENTES --

-- drop table usuarios;

CREATE TABLE cargos (
    cargoId INT PRIMARY KEY AUTO_INCREMENT not null,
    cargo_nome ENUM('auxiliar', 'gestor', 'solicitante') NOT NULL
);

create table usuarios(
	usuId int primary key not null auto_increment,
    nome varchar(100) not null,
    email varchar(200) not null,
    senha varchar(20) not null,
	fk_cargoId int not null,
    
    foreign key (fk_cargoId) references cargos(cargoId)
);

create table tipomovi(
	id int primary key not null,
    tipo enum('entrada', 'saida') not null
);

create table categoria(
	id int primary key not null,
    nome varchar(100) not null
);

-- CRIAÇÃO DAS TABELAS FRACAS/DEPENDENTES --


-- TABELAS DEPENDENTES DA TABELA USUARIOS
-- drop table auxiliar, gestor, solicitante;
create table auxiliar(
    fk_usuId int not null,
    fk_cargoId int not null,
    
    foreign key (fk_cargoId) references cargos(cargoId),
    foreign key (fk_usuId) references usuarios(usuId)
);

create table gestor(
    fk_usuId int not null,
    fk_cargoId int,
    
    foreign key (fk_usuId) references usuarios(usuId),
    foreign key (fk_cargoId) references cargos(cargoId)
);

create table solicitante(
    usuId int not null,
    fk_solicitanteId int,
    
    foreign key (usuId) references usuarios(id),
    foreign key (fk_solicitanteId) references cargos(solicitanteId)
);

-- TABELAS DEPENDETES DA TABELA CATEGORIA --
create table item(
	id int primary key not null,
    foto blob,
    nome varchar(150) not null,
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

-- TABELA DEPENDENTE DA TABELA tipomovi, categoria, produto e item

create table estoque(
	id int primary key not null,
    nome varchar(100),
    qtdeTotal int,
    fk_categoriaId int not null,
    fk_tipoMoviId int not null,
    fk_produtoId int not null,
    fk_itemId int not null,
    -- necessitaria da fk do item tambem, para ver quantos itens tem no total --
    
    foreign key (fk_categoriaId) references categoria(id),
    foreign key (fk_tipoMoviId) references tipomovi(id),
    foreign key (fk_produtoId) references produto(id),
    foreign key (fk_itemId) references item(id)
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

show tables from onDash;