const cad = require("../models/estoques.js")

 function cadastrarEstoques(id_produtos, chave_produto, quantidade){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(id_produtos, chave_produto, quantidade)
}

 async function listarEstoques(estoques){
     return await cad.listar()
 }

async function pesquisarEstoques(id_produtos){
    return await cad.pesquisar(id_produtos)
}

module.exports={
    cadastrarEstoques,
    listarEstoques,
    pesquisarEstoques
}
