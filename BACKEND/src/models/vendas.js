// Importar o módulo de conexão com o banco de dados 
const con = require("../database/conexao.js")

 function cadastrar(id_clientes, status_pagamento, total){
    con.query(`INSERT INTO vendas SET ? `,
        [id_clientes, 
        status_pagamento, 
        total],
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
       
       con.query(`SELECT * FROM vendas ORDER BY id_clientes`,(erro,resultado)=>{
           if (erro){
            console.error(erro)
            reject( `Erro ao tentar listar as vendas`)
        }
        else{
            console.log(resultado)
            resolve (resultado)
        }
    }) 
    })
}

 function pesquisar(id_clientes){
    return new Promise((resolve,reject)=>{
        con.query(`SELECT * FROM vendas WHERE id_clientes = ? `,id_clientes,(erro,resultado)=>{
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
TESTE DO THUNDER
    "id_clientes":1,
        "status_pagamento":"PAGO",
        "total": 0
*/