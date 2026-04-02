const cad = require("../models/vendas.js")

 function cadastrarVendas(id_clientes, status_pagamento, total){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(id_clientes, status_pagamento, total)
}

async function listarVendas(vendas){
    return await cad.listar()
}

async function pesquisaVendas(id_clientes) {
    return await cad.pesquisar(id_clientes)
}

module.exports={
    cadastrarVendas,
    listarVendas,
    pesquisaVendas
}