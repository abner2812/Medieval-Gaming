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

module.exports={
    cadastrar
}

/*
TESTE DO THUNDER
    "nome_do_extra":"testet",
        "id_produtos":1,
        "chave_extra":"hjagsdfjha"
*/