// Importar o módulo de conexão com o banco de dados 
const con = require("../database/conexao.js")
// const { listar } = require("./clientes.js")

 function cadastrar(id_produtos, chave_produto, quantidade){
    con.query(`INSERT INTO estoques SET ? `,
        [id_produtos, 
        chave_produto,
        quantidade
        ],
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
       
       con.query(`SELECT * FROM estoques ORDER BY quantidade`,(erro,resultado)=>{
           if (erro){
            console.error(erro)
            reject( `Erro ao tentar listar os estoques`)
        }
        else{
            console.log(resultado)
            resolve (resultado)
        }
    }) 
    })
}

module.exports={
    cadastrar,
    listar
}

/*
TESTE DO THUNDER
    "id_produtos":1,
        "chave_produto":"testeteste",
        "quantidade": 1
*/