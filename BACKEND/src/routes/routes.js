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

// ====================  LISTAR AS INFORMAÇÕES ===================== //

// Rota para listar as [BLANK(TO BE REPLACED)] cadastradas
router.get("/clientes/listar",async(req,res)=>{
    let rs = await cli_controller.listarClientes()
    res.send({msg:rs})
})

// Rota para listar as [BLANK(TO BE REPLACED)] cadastradas
router.get("/produtos/listar",async(req,res)=>{
    let rs = await prod_controller.listarProdutos()
    res.send({msg:rs})
})

// Rota para listar as [BLANK(TO BE REPLACED)] cadastradas
router.get("/estoques/listar",async(req,res)=>{
    let rs = await estq_controller.listarEstoques()
    res.send({msg:rs})
})

// Rota para listar as [BLANK(TO BE REPLACED)] cadastradas
router.get("/extras/listar",async(req,res)=>{
    let rs = await extra_controller.listarExtras()
    res.send({msg:rs})
})

// Rota para listar as [BLANK(TO BE REPLACED)] cadastradas
router.get("/requisitos/listar",async(req,res)=>{
    let rs = await reqs_controller.listarRequitos()
    res.send({msg:rs})
})

// Rota para listar as [BLANK(TO BE REPLACED)] cadastradas
router.get("/vendas/listar",async(req,res)=>{
    let rs = await vend_controller.listarVendas()
    res.send({msg:rs})
})

// Rota para listar as [BLANK(TO BE REPLACED)] cadastradas
router.get("/itens_vendas/listar",async(req,res)=>{
    let rs = await iten_vend_controller.listarItensVendas()
    res.send({msg:rs})
})


// ====================  PESQUISAR INFORMAÇÕES ESPECIFICAS ===================== //


module.exports = router
 