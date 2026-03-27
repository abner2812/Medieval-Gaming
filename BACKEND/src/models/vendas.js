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

module.exports={
    cadastrar
}

/*
TESTE DO THUNDER
    "id_clientes":1,
        "status_pagamento":"PAGO",
        "total": 0
*/