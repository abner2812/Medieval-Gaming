## Nome do Projeto: Livraria Mente Aberta
### DEscrição do Projeto
    - Este projeto é destinado a criação de um e-commerce de uma loja de jogos online, onde os produtos podem ser visualizados, copmprados ou apenas adicionados ao carrinho, por um cliente, previamente cadastrado.
### Requisitos Funcionais
    - Listar produtos;
    - Cadastrar Produtos;
    - Consultar Produtos;
    - Atualizar os Produtos;
    - Cadastrar Clientes;
    - Atualizar os Clientes;
    - Cliente podem efetuar compras;
    - Podem listar seus Pedidos;
    - Realizar Pagamentos;
### Requisitos Técnicos da Aplicação
    - Node Js( Node JavaScript );
    - Linguagem JavaScript;
    - Bibliotecas:
        * Express -> Servidor
        * Mysql2 -> Banco de Dados
        * BCript -> Criptografia da Senha
        * JWT -> Json Web Token
        * DotEnv -> Configurar as Variáveis de Ambiente
        * Morgan -> Gerar loops de requisição 
        * Helmet -> Segurança dos Cabeçalhos
        * CORS -> Permitir o acesso de protocolos diversos
### Versionamento da Aplicação
    - Ferramenta de versionamento: GIT
    - Ferramenta de publicação: GITHUB
    - Arquivo de documentação: READ.MD
    - Aquivo para ignorar: .GITIGNORE
### Estrutura do Projeto:
    Projeto
        |_ node_module
        |_ .gitignore
        |_ .dotenv
        |_ package.json
        |_ src
                |_ index.js
                |_ config
                |   |_ config.js
                |_ database
                |  | conexao.js
                |_ models
                |  |_ Clientes.js
                |  |_ Produtos.js
                |  |_ Extras.js
                |  |_ Requisitos.js
                |  |_ Estoques.js
                |  |_ Vendas.js
                |  |_ Itens_Vendas.js
                |_ controller.
                |   |_ clientes_controller.js
                |   |_ Produtos_controller.js
                |   |_ Extras_controller.js
                |   |_ Requisitos_controller.js
                |   |_ Estoques_controller.js
                |   |_ Vendas_controller.js
                |   |_ Itens_Vendas_controller.js
                |_ routes
                |   |_ routes.js
                |_ middleware
                |   |_ verificar_token.js