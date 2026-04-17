const cad = require("../models/extras.js")

 function cadastrarExtras(nome_do_extra, id_produtos, chave_extra){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(nome_do_extra, id_produtos, chave_extra)
}

 async function listarExtras(extras){
     return await cad.listar()
}

async function pesquisaExtras(nome_do_extra) {
    return await cad.pesquisar(nome_do_extra)
}
async function pesquisaExtrasID(id) {
    return await cad.pesquisarPorID(id)
}
module.exports={
    cadastrarExtras,
    listarExtras,
    pesquisaExtras,
    pesquisaExtrasID
}