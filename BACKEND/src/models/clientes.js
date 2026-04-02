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

function listar(){
   return new Promise((resolve,reject)=>{
       
       con.query(`SELECT * FROM clientes ORDER BY nome`,(erro,resultado)=>{
           if (erro){
            console.error(erro)
            reject( `Erro ao tentar listar os clientes`)
        }
        else{
            console.log(resultado)
            resolve (resultado)
        }
    }) 
    })
}


 function pesquisar(nome){
    return new Promise((resolve,reject)=>{
        con.query(`SELECT * FROM clientes WHERE nome = ?`,nome,(erro,resultado)=>{
            if (erro){
                console.error(erro)
                reject(`Erro ao tentar listar as produto`)
            }
            else{
                console.log(resultado)
                resolve(resultado)
            }
    })
    })
}


module.exports={
    cadastrar,
    listar,
    pesquisar
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