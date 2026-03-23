CREATE DATABASE IF NOT EXISTS VendasJogos;
USE VendasJogos;

-- Tabela CLIENTES
CREATE TABLE CLIENTES (
    ID_CLIENTES INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(200),
    EMAIL VARCHAR(200) NOT NULL UNIQUE KEY,
    CELULAR VARCHAR(15) NOT NULL,
    DATA_NASCIMENTO DATE NOT NULL,
    USUARIO VARCHAR(70) NOT NULL,
    SENHA VARCHAR(255) NOT NULL UNIQUE KEY
);

-- Tabela PRODUTOS
CREATE TABLE PRODUTOS (
    ID_PRODUTOS INT AUTO_INCREMENT PRIMARY KEY,
    PLATAFORMA VARCHAR(30) NOT NULL,
    NOME_DO_JOGO VARCHAR(200),
    CATEGORIA VARCHAR(200) NOT NULL,
    CLASSIFICACAO_INDICATIVA VARCHAR(30) NOT NULL,
    PRECO DECIMAL(5,2) NOT NULL,
    DESCRICAO TEXT NOT NULL,
    FOTO_CAPA TEXT NOT NULL,
    FOTO1 TEXT NOT NULL,
    FOTO2 TEXT NOT NULL,
    FOTO3 TEXT NOT NULL,
    FOTO4 TEXT NOT NULL,
    FOTO5 TEXT NOT NULL,
    FOTO6 TEXT NOT NULL,
    FOTO7 TEXT NOT NULL,
    VIDEO TEXT 
);


-- Tabela VENDAS
CREATE TABLE VENDAS (
    ID_VENDAS INT AUTO_INCREMENT PRIMARY KEY,
    ID_CLIENTES INT NOT NULL,
    DATAS DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    STATUS_PAGAMENTO ENUM('PAGO','PENDENTE','CANCELADO','EM PROCESSAMENTO'),
    TOTAL DECIMAL(10,2) NOT NULL
);

-- Tabela ITENS_VENADS
CREATE TABLE ITENS_VENDAS_DETALHES(
	ID_VENDAS_DETALHES INT AUTO_INCREMENT PRIMARY KEY, 
	QUANTIDADE INT NOT NULL, 
	PRECO_UNITARIO DECIMAL NOT NULL,
	TOTAL DECIMAL(10,2) NOT NULL,
    ID_VENDAS INT NOT NULL,
    ID_CLIENTES INT NOT NULL,
    ID_PRODUTOS INT NOT NULL
);

-- Tabela ESTOQUES
CREATE TABLE ESTOQUES (
    ID_ESTOQUES INT AUTO_INCREMENT PRIMARY KEY,
    ID_PRODUTOS INT NOT NULL,
    CHAVE_PRODUTO VARCHAR(30) NOT NULL,
    QUANTIDADE INT NOT NULL,
    DATA_ENTRADA DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ID_PRODUTOS) REFERENCES PRODUTOS(ID_PRODUTOS)
);

-- Tabela EXTRAS
CREATE TABLE EXTRAS (
    ID_EXTRAS INT AUTO_INCREMENT PRIMARY KEY,
    NOME_DO_EXTRA VARCHAR(200),
    ID_PRODUTOS INT NOT NULL,
    CHAVE_EXTRA VARCHAR(30),
    FOREIGN KEY (ID_PRODUTOS) REFERENCES PRODUTOS(ID_PRODUTOS)
);

-- Tabela REQUISITOS
CREATE TABLE REQUISITOS (
    ID_REQUISITO INT AUTO_INCREMENT PRIMARY KEY,
    ID_PRODUTOS INT NOT NULL,
    PROCESSADOR VARCHAR(100) NOT NULL,
    MEMORIA_RAM VARCHAR(50),
    SISTEMA_OPERACIONAL VARCHAR(100) NOT NULL,
    PLACA_DE_VIDEO VARCHAR(150) NOT NULL,
    ARMAZENAMENTO VARCHAR(50),
    VERSAO_DIRECTX VARCHAR(30),
    CONEXAO_INTERNET ENUM('SIM','NÃO'),
    OUTROS TEXT
);

-- ////////////////////////////////
-- ////////////////////////////////
ALTER TABLE `VendasJogos`.`itens_vendas` 
ADD CONSTRAINT `fk_itens_vendas_pk_vendas`
  FOREIGN KEY (`id_vendas`)
  REFERENCES `VendasJogos`.`vendas` (`id_vendas`);

-- =================
-- =================
  
ALTER TABLE `VendasJogos`.`itens_vendas` 
ADD CONSTRAINT `fk_itens_vendas_pk_produtos`
  FOREIGN KEY (`id_produtos`)
  REFERENCES `VendasJogos`.`produtos` (`id_produtos`);

-- =================
-- =================

ALTER TABLE `VendasJogos`.`itens_vendas` 
ADD CONSTRAINT `fk_itens_vendas_pk_clientes`
  FOREIGN KEY (`id_clientes`)
  REFERENCES `VendasJogos`.`clientes` (`id_clientes`);

-- =================
-- ///////////////////////
-- =================

ALTER TABLE `VendasJogos`.`extras` 
ADD CONSTRAINT `fk_extras_pk_produtos`
  FOREIGN KEY (`id_produtos`)
  REFERENCES `VendasJogos`.`produtos` (`id_produtos`);

-- =================
-- //////////////////////
-- =================

ALTER TABLE `VendasJogos`.`estoques` 
ADD CONSTRAINT `fk_estoques_pk_produtos`
  FOREIGN KEY (`id_produtos`)
  REFERENCES `VendasJogos`.`produtos` (`id_produtos`);

-- =================
-- ////////////////////
-- =================

ALTER TABLE `VendasJogos`.`requisitos` 
ADD CONSTRAINT `fk_requisitos_pk_produtos`
  FOREIGN KEY (`id_produtos`)
  REFERENCES `VendasJogos`.`produtos` (`id_produtos`);


-- =================
-- ///////////////////
-- =================

ALTER TABLE `VendasJogos`.`vendas` 
ADD CONSTRAINT `fk_vendas_pk_clientes`
  FOREIGN KEY (`id_clientes`)
  REFERENCES `VendasJogos`.`clientes` (`id_clientes`);