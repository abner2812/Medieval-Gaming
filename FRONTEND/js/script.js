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
                let cardMV = `<div class="col-sm-3">
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
                let cardCat = `<div class="col-sm-3">
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





function carregarPagina_Jogos(){
        id = window.location.search.split("=")

        let detalhesproduto = document.getElementById("detalhesjogo")
        let linha = `<div class=row>`

        let extras = document.getElementById("extras-jogo")
        extras.innerHTML = `<h2>Extras</h2>`
        
        
        fetch("http://127.0.0.1:3001/api/v1/produtos/pesquisarid/" + id[1])
        .then((response) => response.json())
        .then((rs) => {
            rs.msg.map((item) => {
                // console.log(item.nome_produto)
                let card_img = ` <div class="card col-6">
                <img src="${item.FOTO_CAPA}" class="card-img-top" id="fotoprincipal" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=exibirfoto()>
                <div class="card-body">
                <p class="miniatura">
                <img src="${item.FOTO_CAPA}" id="fotocapa" onclick= trocafoto("${item.FOTO_CAPA}")>
                <img src="${item.FOTO1}" id="foto1" )>
                <img src="${item.FOTO2}" id="foto2" >
                <img src="${item.FOTO3}" id="foto3" >
                <img src="${item.FOTO4}" id="foto4" >
                <img src="${item.FOTO5}" id="foto5" >
                <img src="${item.FOTO6}" id="foto6" >
                <img src="${item.FOTO7}" id="foto7" >
                <a id="video">${item.VIDEO}</a>
                </p>
                </div>
                </div> `
                let card_tit_cont = `<div class="card col-4">
                <div class="card-body">
                <h5 class="card-title">${item.NOME_DO_JOGO}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                ${item.PLATAFORMA}
                </h6>
                <p class="card-text">${item.DESCRICAO}</p>
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
                        <li class="list-group-item">${item.NOME_DO_EXTRA}</li>
                        <li class="list-group-item">${item.NOME_DO_EXTRA}</li>
                    </ul>`

                    linhaEX+=listaEX
                 })
                 linhaEX+=`</div>`
                 extras.innerHTML=linhaEX
            })


    }


