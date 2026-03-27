const cad = require("../models/requisitos.js")

 function cadastrarRequisitos(id_produtos, processador, memoria_ram, sistema_operacional, placa_de_video, armazenamento, versao_directx, conexao_internet, outros){
    // Estamos cadasatrando o produto 
    return cad.cadastrar(id_produtos, processador, memoria_ram, sistema_operacional, placa_de_video, armazenamento, versao_directx, conexao_internet, outros)
}
module.exports=cadastrarRequisitos
