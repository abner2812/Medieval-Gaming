// Importar o módulo de conexão com o banco de dados 
const con = require("../database/conexao.js")

 function cadastrar(plataforma, nome_do_jogo, categoria, classificacao_indicativa, preco, descricao, foto_capa, foto1, foto2, foto3, foto4, foto5, foto6, foto7, video){
    con.query(`INSERT INTO produtos SET ? `,
        [plataforma, 
        nome_do_jogo,
        categoria,
        classificacao_indicativa, 
        preco, descricao, 
        foto_capa, 
        foto1, 
        foto2, 
        foto3, 
        foto4, 
        foto5, 
        foto6, 
        foto7, 
        video],
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
       
       con.query(`SELECT * FROM produtos ORDER BY nome_do_jogo`,(erro,resultado)=>{
           if (erro){
            console.error(erro)
            reject( `Erro ao tentar listar os produtos`)
        }
        else{
            console.log(resultado)
            resolve (resultado)
        }
    }) 
    })
}

 function pesquisar(nome_do_jogo){
    return new Promise((resolve,reject)=>{
        con.query(`SELECT * FROM produtos WHERE nome_do_jogo = ? `,nome_do_jogo,(erro,resultado)=>{
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
    "plataforma":"PC", 
        "nome_do_jogo":"GTA6",
        "categoria":"Acção e Aventura",
        "classificacao_indicativa":"18+", 
        "preco":499.99, 
        "descricao":"DESCRIÇÃO VAI AQUI!", 
        "foto_capa":"0", 
        "foto1":"1", 
        "foto2":"2", 
        "foto3":"3", 
        "foto4":"4", 
        "foto5":"5", 
        "foto6":"6", 
        "foto7":"7", 
        "video":"video"
*/