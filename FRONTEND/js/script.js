fetch("http://127.0.0.1:3001/api/v1/produto/listar")
    .then((response) => response.json())
    .then((rs) => {
        let menu = document.getElementById("menu-categorias")
        rs.msg.map((item) => {
            menu.innerHTML += `<li> <a class="dropdown-item" href="categoria.html?id=${item.id_categoria}">${item.titulo_categoria}</a></li>`
        })
    })
    .catch((e) => {
        console.error(`Erro ao carregar a api -> ${e}`)
    })

function paginadetalhes(id) {
    window.location.href = `pagina_jogo.html?id_produto=${id}`
}


function carregarHome() {
    const populares = document.getElementById("populares")
    populares.innerHTML = `<h2>POPULARES</h2> `

    const mais_vendidos = document.getElementById("mais_vendidos")
    mais_vendidos.innerHTML = `<h2>MAIS VENDIDOS</h2>`

    const categoria = document.getElementById("CATEGORIAS")
    categoria.innerHTML = `<h2>CATEGORIAS</h2>`
    // Construir a linha para adicionar os cards
    let linha = `<div class="row">`

    // Vamos fazer um fetch(busca) no backend para
    //obter todos os produtos de lançamentos
    fetch("http://127.0.0.1:3001/api/v1/produtos/listar")
        .then((response) => response.json())
        .then((rs) => {
            rs.msg.map((item) => {
                let card = `<div class="col-sm-3" onclick=paginadetalhes(${item.ID_PRODUTOS})>
                    <div class="card">
                        <img class="card-img-top" src="${item.FOTO_CAPA}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${item.NOME_DO_JOGO}</h5>
                            <p class="card-text">${item.PLATAFORMA}</p>
                            <h6>${item.PRECO}</h6>
                            <a href="#" onclick="adicionar(${item.ID_PRODUTO})" class="btn btn-primary">Adicionar ao Carrinho</a>
                        </div>
                    </div>
                </div>`
                linha += card
            })
            linha += `</div>`
            populares.innerHTML += linha
        })



    // Construir a linha para adicionar os cards
    let linhaMV = `<div class="row">`

    // Vamos fazer um fetch(busca) no backend para
    //obter todos os produtos de lançamentos
    fetch("http://127.0.0.1:3001/api/v1/produtos/listar")
        .then((response) => response.json())
        .then((rs) => {
            rs.msg.map((item) => {
                let cardMV = `<div class="col-sm-3" onclick=paginadetalhes(${item.ID_PRODUTOS})>
                    <div class="card">
                        <img class="card-img-top" src="${item.FOTO_CAPA}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title"><a href="#">${item.NOME_DO_JOGO}</a></h5>
                            <p class="card-text">${item.PLATAFORMA}</p>
                            <h6>${item.PRECO}</h6>
                            <a href="#" onclick="adicionar(${item.ID_PRODUTO})" class="btn btn-primary">Adicionar ao Carrinho</a>
                        </div>
                    </div>
                </div>`
                linhaMV += cardMV
            })
            linhaMV += `</div>`
            mais_vendidos.innerHTML += linhaMV
        })


    // Construir a linha para adicionar os cards
    let linhaCat = `<div class="row">`

    // Vamos fazer um fetch(busca) no backend para
    //obter todos os produtos de lançamentos
    fetch("http://127.0.0.1:3001/api/v1/produtos/listar")
        .then((response) => response.json())
        .then((rs) => {
            rs.msg.map((item) => {
                let cardCat = `<div class="col-sm-3" onclick=paginadetalhes(${item.ID_PRODUTOS})>
                    <div class="card">
                        <img class="card-img-top" src="${item.FOTO_CAPA}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${item.NOME_DO_JOGO}</h5>
                            <p class="card-text">${item.PLATAFORMA}</p>
                            <h6>${item.PRECO}</h6>
                            <a href="#" onclick="adicionar(${item.ID_PRODUTO})" class="btn btn-primary">Adicionar ao Carrinho</a>
                        </div>
                    </div>
                </div>`
                linhaCat += cardCat
            })
            linhaCat += `</div>`
            categoria.innerHTML += linhaCat
        })


}

// #######################################################################################################################################################################
// #######################################################################################################################################################################
// #######################################################################################################################################################################


function trocafoto(FOTO) {
    document.getElementById("fotoprincipal").src = FOTO
}


function exibirfoto(FOTO) {
    FOTO = document.getElementById("fotoprincipal").src
    let img = document.getElementById("imagem")
    img.innerHTML = ` <img src=${FOTO}>`
}



// #############   Página Jogo  #################

function carregarPagina_Jogos() {
    id = window.location.search.split("=")

    let detalhesproduto = document.getElementById("detalhesjogo")
    let linha = `<div class=row class="container">`

    let extras = document.getElementById("extras-jogo")
    extras.innerHTML = `<h2>Extras</h2>`

    let requisitos = document.getElementById("requisitos-sistema")
    requisitos.innerHTML = `<h2>requisitos</h2>`

    fetch("http://127.0.0.1:3001/api/v1/produtos/pesquisarid/" + id[1])
        .then((response) => response.json())
        .then((rs) => {
            rs.msg.map((item) => {
                // console.log(item.nome_produto)
                let card_img = ` <div class="card col-6" id="pjogoimgs">
                <img src="${item.FOTO_CAPA}" class="card-img-top" id="fotoprincipal" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=exibirfoto()>
                <div class="card-body">
                <p class="miniatura">
                <img src="${item.FOTO_CAPA}" id="fotocapa" onclick= trocafoto("${item.FOTO_CAPA}")>
                <img src="${item.FOTO1}" id="foto1" onclick=trocafoto("${item.FOTO1}) >
                <img src="${item.FOTO2}" id="foto2" onclick=trocafoto("${item.FOTO2})>
                <img src="${item.FOTO3}" id="foto3" onclick=trocafoto("${item.FOTO3})>
                <img src="${item.FOTO4}" id="foto4" onclick=trocafoto("${item.FOTO4})>
                <img src="${item.FOTO5}" id="foto5" onclick=trocafoto("${item.FOTO5})>
                <img src="${item.FOTO6}" id="foto6" onclick=trocafoto("${item.FOTO6})>
                <img src="${item.FOTO7}" id="foto7" onclick=trocafoto("${item.FOTO7})>
                <a id="video">${item.VIDEO}</a>
                </p>
                </div>
                </div> `
                let card_tit_cont = `<div class="card col-4" id="pjogo">
                <div class="card-body" >
                <h5 class="card-title" id="detalhes1">${item.NOME_DO_JOGO}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                ${item.PLATAFORMA}
                </h6>
                <p class="card-text" id="detalhes2">${item.DESCRICAO}</p>
                </div>
                </div>`

                let card_preco = ` <div class="card col-2">
                <div class="card-body">
                <h5 class="card-title">R$ ${item.PRECO}</h5>
                <a href="#" class="btn btn-primary">Adicionar ao Carrinho</a>
                <a href="#" class="btn btn-warning">Comprar</a>
                </div>
                </div> `
                linha += card_img
                linha += card_tit_cont
                linha += card_preco

            })
            linha += `</div>`
            detalhesproduto.innerHTML = linha
        })



    let linhaEX = `<div class="lista">`

    fetch("http://127.0.0.1:3001/api/v1/extras/pesquisarid/" + id[1])
        .then((response) => response.json())
        .then((rs) => {
            rs.msg.map((item) => {
                let listaEX = `<ul class="list-group">

                        <li class="list-group-item" >${item.NOME_DO_JOGO}</li>
                        <li class="list-group-item">${item.NOME_DO_EXTRA}</li>
                    </ul>`

                linhaEX += listaEX
            })
            linhaEX += `</div>`
            extras.innerHTML = linhaEX
        })

    let linhaREQ = `<div class="requisitos">`

    fetch("http://127.0.0.1:3001/api/v1/requisitos/pesquisarid/" + id[1])
        .then((response) => response.json())
        .then((rs) => {
            rs.msg.map((item) => {
                let listaREQ = `<ul class="list-group" id="requisitos">
                        <li class="list-group-item">${item.NOME_DO_JOGO}</li>
                        <li class="list-group-item">${item.PROCESSADOR}</li>
                        <li class="list-group-item">${item.MEMORIA_RAM}</li>
                        <li class="list-group-item">${item.SISTEMA_OPERACIONAL}</li>
                        <li class="list-group-item">${item.PLACA_DE_VIEDO}</li>
                        <li class="list-group-item">${item.ARMAZENAMENTO}</li>
                        <li class="list-group-item">${item.VERSAO_DIRECTX}</li>
                        <li class="list-group-item">${item.CONEXAO_INTERNET}</li>
                        <li class="list-group-item">${item.OUTROS}</li>
                    </ul>`
                linhaREQ += listaREQ
            })
            linhaREQ += `</div>`
            requisitos.innerHTML = linhaREQ
        })

}

// ####################################################################################################################################################################### //
// ####################################################################################################################################################################### //
// ####################################################################################################################################################################### //
// ####################################################################################################################################################################### //

function carregarPlataforma() {
    const populares1 = document.getElementById("populares1")
    populares1.innerHTML = `<h2>POPULARES</h2> `

    const mais_vendidos1 = document.getElementById("mais_vendidos1")
    mais_vendidos1.innerHTML = `<h2>MAIS VENDIDOS</h2>`

    const categoria1 = document.getElementById("CATEGORIAS1")
    categoria1.innerHTML = `<h2>CATEGORIAS</h2>`
    // Construir a linha para adicionar os cards
    let linhaP = `<div class="row">`

    // Vamos fazer um fetch(busca) no backend para
    //obter todos os produtos de lançamentos
    fetch("http://127.0.0.1:3001/api/v1/produtos/pesquisarplataforma")
        .then((response) => response.json())
        .then((rs) => {
            rs.msg.map((item) => {
                let cardP = `<div class="col-sm-3" onclick=paginadetalhes(${item.ID_PRODUTOS})>
                    <div class="card">
                        <img class="card-img-top" src="${item.FOTO_CAPA}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${item.NOME_DO_JOGO}</h5>
                            <p class="card-text">${item.PLATAFORMA}</p>
                            <h6>${item.PRECO}</h6>
                            <a href="#" onclick="adicionar(${item.ID_PRODUTO})" class="btn btn-primary">Adicionar ao Carrinho</a>
                        </div>
                    </div>
                </div>`
                linhaP += cardP
            })
            linhaP += `</div>`
            populares1.innerHTML += linhaP
        })



    // Construir a linha para adicionar os cards
    let linhaPMV = `<div class="row">`

    // Vamos fazer um fetch(busca) no backend para
    //obter todos os produtos de lançamentos
    fetch("http://127.0.0.1:3001/api/v1/produtos/pesquisarplataforma")
        .then((response) => response.json())
        .then((rs) => {
            rs.msg.map((item) => {
                let cardPMV = `<div class="col-sm-3" onclick=paginadetalhes(${item.ID_PRODUTOS})>
                    <div class="card">
                        <img class="card-img-top" src="${item.FOTO_CAPA}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title"><a href="#">${item.NOME_DO_JOGO}</a></h5>
                            <p class="card-text">${item.PLATAFORMA}</p>
                            <h6>${item.PRECO}</h6>
                            <a href="#" onclick="adicionar(${item.ID_PRODUTO})" class="btn btn-primary">Adicionar ao Carrinho</a>
                        </div>
                    </div>
                </div>`
                linhaPMV += cardPMV
            })
            linhaPMV += `</div>`
            mais_vendidos1.innerHTML += linhaPMV
        })


    // Construir a linha para adicionar os cards
    let linhaPCat = `<div class="row">`

    // Vamos fazer um fetch(busca) no backend para
    //obter todos os produtos de lançamentos
    fetch("http://127.0.0.1:3001/api/v1/produtos/pesquisarplataforma")
        .then((response) => response.json())
        .then((rs) => {
            rs.msg.map((item) => {
                let cardPCat = `<div class="col-sm-3" onclick=paginadetalhes(${item.ID_PRODUTOS})>
                    <div class="card">
                        <img class="card-img-top" src="${item.FOTO_CAPA}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${item.NOME_DO_JOGO}</h5>
                            <p class="card-text">${item.PLATAFORMA}</p>
                            <h6>${item.PRECO}</h6>
                            <a href="#" onclick="adicionar(${item.ID_PRODUTO})" class="btn btn-primary">Adicionar ao Carrinho</a>
                        </div>
                    </div>
                </div>`
                linhaPCat += cardPCat
            })
            linhaPCat += `</div>`
            categoria1.innerHTML += linhaPCat
        })


}
