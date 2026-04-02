const cad = require("../models/itens_vendas.js")

 function cadastrarItensVendas(quantidade, preco_unitario, total,  id_vendas,  id_clientes,  id_produtos){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(quantidade, preco_unitario, total,  id_vendas,  id_clientes,  id_produtos)
}

async function listarItensVendas(vendas){
    return await cad.listar()
}

async function pesquisarItensVendas(id_vendas){
    return await cad.pesquisar(id_vendas)
}

module.exports={
    cadastrarItensVendas,
    listarItensVendas,
    pesquisarItensVendas
}
