const cad = require("../models/vendas.js")

 function cadastrarVendas(id_clientes, status_pagamento, total){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(id_clientes, status_pagamento, total)
}
module.exports=cadastrarVendas