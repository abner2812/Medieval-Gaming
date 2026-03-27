const config = require("../config/config.js")

require("dotenv").config()
// importar o banco de dados do MySQL2
const mysql = require("mysql2")
// Passar as configurações para estabelecer a conexão
// Vamos usar o comando export para disponibilizar a conxão como o banco de dados com os modules.
const conexao = mysql.createConnection(config)
conexao.connect((e)=>{
    if (e){
        return console.log(e)
    }
})
module.exports = conexao