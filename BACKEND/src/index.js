// Chamar o arquivo de configuração das variáveis de ambiente
require("dotenv").config()
// Importar o módulo do servidor express
const express= require("express")
// Importar o módulo do cors
const cors=require("cors")

// Importar o a  api
const routes = require("./routes/routes.js")


// Criar a intância do servidor
const app = express()

// transitar com o conteúdo JSON na aplicação
app.use(express.json())

// Aplicar o módulo
app.use(cors())

// Rota para cadastrar a categoria
app.use("/api/v1",routes)

app.listen(process.env.HOST_PORT,()=>console.log(`Servidor online http://${process.env.HOST_IP}:${process.env.HOST_PORT}`))