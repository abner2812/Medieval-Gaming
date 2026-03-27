const cad = require("../models/estoques.js")

 function cadastrarEstoques(id_produtos, chave_produto, quantidade){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(id_produtos, chave_produto, quantidade)
}
module.exports=cadastrarEstoques

