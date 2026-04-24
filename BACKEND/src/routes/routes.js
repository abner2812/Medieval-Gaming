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
router.get("/produtos/listarcategoria",async(req,res)=>{
    let rs = await prod_controller.listarCategoria()
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

router.get("/clientes/pesquisar",async(req,res)=>{
    // console.log(req.body.nome)
    let resul = await cli_controller.pesquisarClientes(req.body.nome)
    res.send({msg:resul})
})
// -- Produtos:
router.get("/produtos/pesquisar",async(req,res)=>{
    console.log(req.body.nome_do_jogo)
    let resul = await prod_controller.pesquisarProdutos(req.body.nome_do_jogo)
    res.send({msg:resul})
})

router.get("/produtos/pesquisarplataforma/:plataforma",async(req,res)=>{
    console.log(req.params.plataforma)
    let resul = await prod_controller.pesquisarProdutosPlataforma(req.params.plataforma)
    res.send({msg:resul})
})

router.get("/produtos/pesquisarid/:id",async(req,res)=>{
    console.log(req.params.id)
    let resul = await prod_controller.ListarBuscarPorId(req.params.id)
    res.send({msg:resul})
})





// -- Extras:
router.get("/extras/pesquisar",async(req,res)=>{
    console.log(req.body.nome_do_extra)
    let resul = await extra_controller.pesquisaExtras(req.body.nome_do_extra)
    res.send({msg:resul})
})

router.get("/extras/pesquisarid/:id",async(req,res)=>{
    console.log(req.params.id)
    let resul = await extra_controller.pesquisaExtrasID(req.params.id)
    res.send({msg:resul})
})





// -- Venda
router.get("/vendas/pesquisar",async(req,res)=>{
    console.log(req.body.id_clientes)
    let resul = await vend_controller.pesquisaVendas(req.body.id_clientes)
    res.send({msg:resul})
})

router.get("/itensvendas/pesquisar",async(req,res)=>{
    console.log(req.body.id_vendas)
    let resul = await iten_vend_controller.pesquisarItensVendas(req.body.id_vendas)
    res.send({msg:resul})
})

router.get("/estoques/pesquisar",async(req,res)=>{console.log(req.body.id_produtos);let resul = await estq_controller.pesquisarEstoques(req.body.id_produtos);res.send({msg:resul})
})




// -- Requisitos
router.get("/requisitos/pesquisar",async(req,res)=>{console.log(req.body.id_produtos);let resul = await reqs_controller.pesquisarRequisitos(req.body.id_produtos);res.send({msg:resul})})

router.get("/requisitos/pesquisarid/:id",async(req,res)=>{
    console.log(req.params.id);
    let resul = await reqs_controller.pesquisarRequisitosID(req.params.id);
    res.send({msg:resul})
})
// router.get("/extras/pesquisarid/:id",async(req,res)=>{
//     console.log(req.params.id)
//     let resul = await extra_controller.pesquisaExtrasID(req.params.id)
//     res.send({msg:resul})

module.exports = router
 