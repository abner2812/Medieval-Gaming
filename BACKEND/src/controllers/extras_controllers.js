const cad = require("../models/extras.js")

 function cadastrarExtras(nome_do_extra, id_produtos, chave_extra){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(nome_do_extra, id_produtos, chave_extra)
}
module.exports=cadastrarExtras