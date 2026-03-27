const cad = require("../models/itens_vendas.js")

 function cadastrarItensVendas(quantidade, preco_unitario, total,  id_vendas,  id_clientes,  id_produtos){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(quantidade, preco_unitario, total,  id_vendas,  id_clientes,  id_produtos)
}
module.exports=cadastrarItensVendas
