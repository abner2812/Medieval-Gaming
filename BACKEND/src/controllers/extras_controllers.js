const cad = require("../models/extras.js")

 function cadastrarExtras(nome_do_extra, id_produtos, chave_extra){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(nome_do_extra, id_produtos, chave_extra)
}

 async function listarExtras(extras){
     return await cad.listar()
}

module.exports={
    cadastrarExtras,
    listarExtras
}