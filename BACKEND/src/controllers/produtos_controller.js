const cad = require("../models/produtos.js")

 function cadastrarProdutos(plataforma, nome_do_jogo, categoria, classificacao_indicativa, preco, descricao, foto_capa, foto1, foto2, foto3, foto4, foto5, foto6, foto7, video){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(plataforma, nome_do_jogo, categoria, classificacao_indicativa, preco, descricao, foto_capa, foto1, foto2, foto3, foto4, foto5, foto6, foto7, video)
}
module.exports=cadastrarProdutos
