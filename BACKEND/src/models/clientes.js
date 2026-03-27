// Importar o módulo de conexão com o banco de dados 
const con = require("../database/conexao.js")

 function cadastrar(nome, email, celular, data_nascimento, usuario, senha){
    con.query(`INSERT INTO clientes SET ? `,
        [nome, 
        email , 
        celular, 
        data_nascimento, 
        usuario, 
        senha],
        (erro,resultado)=>{
        if(erro){
            console.error(erro)
            return `Erro ao tentar cadastrar`
        }
        else{
            console.log(resultado)
            return resultado
        }
    })
}

// function listar(){
//     con.query(`SELECT * FROM produto`,(erro,resultado)=>{
//         if (erro){
//             return `Erro ao tentar listar as produtos`
//         }
//         else{
//             return resultado
//         }
//     })
// }

//  function pesquisarProduto(nome_produto){
//     con.query(`SELECT * FROM produto WHERE nome_produto = ?`,nome_produto,(erro,resultado)=>{
//         if (erro){
//             return `Erro ao tentar listar as produto`
//         }
//         else{
//             return resultado
//         }
//     })
// }

// module.exports={
//     cadastrar,
//     listar,
//     pesquisarProduto
// }

module.exports={
    cadastrar
}
/*
TESTE DO THUNDER:
 "nome": "Teste de conexão com banco do PI", 
        "email": "testepi@senac.com", 
        "celular": "123123123", 
        "data_nascimento":"2026/30/27", 
        "usuario": "teste", 
        "senha": "1234"
*/ 