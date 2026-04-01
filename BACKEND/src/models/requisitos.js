// Importar o módulo de conexão com o banco de dados 
const con = require("../database/conexao.js")

 function cadastrar(id_produtos, processador, memoria_ram, sistema_operacional, placa_de_video, armazenamento, versao_directx, conexao_internet, outros){
    con.query(`INSERT INTO requisitos SET ? `,
        [id_produtos,
        processador,
        memoria_ram,
        sistema_operacional,
        placa_de_video,
        armazenamento,
        versao_directx,
        conexao_internet,
        outros],
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
       
       con.query(`SELECT * FROM requisitos ORDER BY id_produtos`,(erro,resultado)=>{
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

module.exports={
    cadastrar,
    listar
}
 /*
TESTE DO THUNDER
    "id_produtos":1,
        "processador":"intel CORE I5 10700",
        "memoria_ram":"6GB",
        "sistema_operacional":"windows 10/11",
        "placa_de_video":" RTX 2070",
        "armazenamento":"50GB",
        "versao_directx":"10/11",
        "conexao_internet":"sim",
        "outros":""
 */