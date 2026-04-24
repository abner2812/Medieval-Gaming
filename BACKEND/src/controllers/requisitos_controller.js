const cad = require("../models/requisitos.js")

 function cadastrarRequisitos(id_produtos, processador, memoria_ram, sistema_operacional, placa_de_video, armazenamento, versao_directx, conexao_internet, outros){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(id_produtos, processador, memoria_ram, sistema_operacional, placa_de_video, armazenamento, versao_directx, conexao_internet, outros)
}

 async function listarRequitos(requisitos){
     return await cad.listar()
}

async function pesquisarRequisitos(id_produtos) {
    return await cad.pesquisar(id_produtos)
}

async function pesquisarRequisitosID(id_extras) {
    return await cad.pesquisarPorID(id_extras)
}
module.exports={
    cadastrarRequisitos,
    listarRequitos,
    pesquisarRequisitos,
    pesquisarRequisitosID
}