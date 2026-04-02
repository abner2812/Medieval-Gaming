// Importar o módulo de conexão com o banco de dados 
const con = require("../database/conexao.js")

 function cadastrar(nome_do_extra, id_produtos, chave_extra){
    con.query(`INSERT INTO extras SET ? `,
        [nome_do_extra,
        id_produtos, 
        chave_extra],
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
       
       con.query(`SELECT * FROM extras ORDER BY nome_do_extra`,(erro,resultado)=>{
           if (erro){
            console.error(erro)
            reject( `Erro ao tentar listar os extras`)
        }
        else{
            console.log(resultado)
            resolve (resultado)
        }
    }) 
    })
}

 function pesquisar(nome_do_extra){
    return new Promise((resolve,reject)=>{
        con.query(`SELECT * FROM extras WHERE nome_do_extra = ? `,nome_do_extra,(erro,resultado)=>{
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
    "nome_do_extra":"testet",
        "id_produtos":1,
        "chave_extra":"hjagsdfjha"
*/