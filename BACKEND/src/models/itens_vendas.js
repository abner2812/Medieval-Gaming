// Importar o módulo de conexão com o banco de dados 
const con = require("../database/conexao.js")

 function cadastrar(quantidade, preco_unitario, total,  id_vendas,  id_clientes,  id_produtos){
    con.query(`INSERT INTO itens_vendas SET ? `,
        [quantidade,  
        preco_unitario,  
        total,  
        id_vendas,  
        id_clientes,  
        id_produtos],
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
       
       con.query(`SELECT * FROM itens_vendas ORDER BY id_clientes`,(erro,resultado)=>{
           if (erro){
            console.error(erro)
            reject( `Erro ao tentar listar itens_vendas`)
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
    "quantidade":5,  
    "preco_unitario":50,  
    "total":500,  
    "id_vendas":1,  
    "id_clientes":1,  
    "id_produtos":1
*/