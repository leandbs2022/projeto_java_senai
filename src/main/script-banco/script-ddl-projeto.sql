-- Gera??o de Modelo f?sico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE categoria (
id int auto_increment PRIMARY KEY,
nome varchar(60)
);

CREATE TABLE produto (
id int auto_increment PRIMARY KEY,
nome varchar(100),
preco float(5,2),
id_categoria int,
FOREIGN KEY(id_categoria) REFERENCES categoria (id)
);

CREATE TABLE lista_produto (
id_produto int,
id_pedido int,
quantidade int,
total float(5,2),
PRIMARY KEY(id_produto,id_pedido),
FOREIGN KEY(id_produto) REFERENCES produto (id)
);

CREATE TABLE cliente (
id int auto_increment PRIMARY KEY,
nome varchar(100),
cidade varchar(100),
endereco varchar(200),
telefone varchar(11)
);

CREATE TABLE pedido (
id int auto_increment PRIMARY KEY,
data_pedido date,
data_entrega date,
total float(5,2),
id_cliente int,
FOREIGN KEY(id_cliente) REFERENCES cliente (id)
);

ALTER TABLE lista_produto ADD FOREIGN KEY(id_pedido) REFERENCES pedido (id)
