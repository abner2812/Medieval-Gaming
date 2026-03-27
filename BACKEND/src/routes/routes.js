// Criar as rotas de acesso a nossa api
const express = require("express")
const router = express.Router()
// const cat_controller = require("../controllers/categorias_controllers.js")
const cli_controller = require("../controllers/clientes_controller.js")
const prod_controller = require("../controllers/produtos_controller.js")
const reqs_controller = require("../controllers/requisitos_controller.js")
const estq_controller = require("../controllers/estoques_controller.js")
const extra_controller = require("../controllers/extras_controllers.js")
const vend_controller = require("../controllers/vendas_controller.js")
const iten_vend_controller = require("../controllers/itens_vendas_controller.js")

// Rotas para cadastrar os clientes com o endpoint /cadastrar
router.post("/clientes/cadastrar", (req, res) => {
    let rs= cli_controller(req.body)    
    res.send({ msg: rs});
})


// Rotas para cadastrar os produtos com o endpoint /cadastrar
router.post("/produtos/cadastrar", (req, res) => {
    let rs= prod_controller(req.body)    
    res.send({ msg: rs});
})

// Rotas para cadastrar os produtos com o endpoint /cadastrar
router.post("/requisitos/cadastrar", (req, res) => {
    let rs= reqs_controller(req.body)    
    res.send({ msg: rs});
})

// Rotas para cadastrar os produtos com o endpoint /cadastrar
router.post("/estoques/cadastrar", (req, res) => {
    let rs= estq_controller(req.body)    
    res.send({ msg: rs});
})

// Rotas para cadastrar os produtos com o endpoint /cadastrar
router.post("/extras/cadastrar", (req, res) => {
    let rs= extra_controller(req.body)    
    res.send({ msg: rs});
})

// Rotas para cadastrar os produtos com o endpoint /cadastrar
router.post("/vendas/cadastrar", (req, res) => {
    let rs=  vend_controller(req.body)    
    res.send({ msg: rs});
})

// Rotas para cadastrar os produtos com o endpoint /cadastrar
router.post("/itens_vendas/cadastrar", (req, res) => {
    let rs=  iten_vend_controller(req.body)    
    res.send({ msg: rs});
})

module.exports = router
 