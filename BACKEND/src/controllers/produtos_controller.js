const cad = require("../models/produtos.js")

 function cadastrarProdutos(plataforma, nome_do_jogo, categoria, classificacao_indicativa, preco, descricao, foto_capa, foto1, foto2, foto3, foto4, foto5, foto6, foto7, video){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(plataforma, nome_do_jogo, categoria, classificacao_indicativa, preco, descricao, foto_capa, foto1, foto2, foto3, foto4, foto5, foto6, foto7, video)
}

 async function listarProdutos(produtos){
     return await cad.listar()
 }

 async function pesquisarProdutos(nome_do_jogo){
     return await cad.pesquisar(nome_do_jogo)
 }
 async function listarCategoria(categoria) {
    return await cad.listarcategoria(categoria)
 }

 async function ListarBuscarPorId(id) {
        return await cad.buscarPorId(id)
    }


module.exports={
    cadastrarProdutos,
    listarProdutos,
    pesquisarProdutos,
    listarCategoria,
    ListarBuscarPorId
}