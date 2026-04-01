const cad = require("../models/clientes.js")

 function cadastrarClientes(nome, email, celular, data_nascimento, usuario, senha){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(nome, email, celular, data_nascimento, usuario, senha)
}
 async function listarClientes(clientes){
     return await cad.listar()
 }

module.exports= {
    cadastrarClientes,
    listarClientes
}
