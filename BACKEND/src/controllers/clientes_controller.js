const cad = require("../models/clientes.js")

 function cadastrarClientes(nome, email, celular, data_nascimento, usuario, senha){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(nome, email, celular, data_nascimento, usuario, senha)
}
module.exports=cadastrarClientes
