const produtos = [

    {
        id: 1,
        titulo: 'Passaro',
        preco: 15.50,
        poster: './img/arara.png',
    },
    {
        id: 2,
        titulo: 'Canguru',
        preco: 156.50,
        poster: './img/canguru.png',
    },
    {
        id: 3,
        titulo: 'Cavalo',
        preco: 300.50,
        poster: './img/cavalo.png',
    },
    {
        id: 4,
        titulo: 'Esquilo',
        preco: 5.50,
        poster: './img/esquilo.png',
    },
    {
        id: 5,
        titulo: 'Leao',
        preco: 1889.50,
        poster: './img/leo.png',
    },
    {
        id: 6,
        titulo: 'Miaco',
        preco: 23.50,
        poster: './img/miaco.png',
    },
    {
        id: 7,
        titulo: 'Iguana',
        preco: 59.50,
        poster: './img/R.png',
    },
    {
        id: 8,
        titulo: 'Urso',
        preco: 897.50,
        poster: './img/urso.png',
    },
    {
        id: 9,
        titulo: 'Veado',
        preco: 459.50,
        poster: './img/veado.png',
    },
];

const CaixaDIV = document.getElementById("list");
const inputDetexto = document.getElementById("search");
const botaoDeProcura = document.querySelector(".Header__Botao");

const Formata = Intl.NumberFormat('pt-BR', {

    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: '2',
});


function Construindo(itens) {
    
    produtos.forEach((element) => {

        var DIV = document.createElement("div");
        DIV.classList.add("Caixa__Div");

        var DIVid = document.createElement("div");
        DIVid.classList.add("indentificacao");
        DIVid.textContent = element.id;
        DIV.appendChild(DIVid);
    
    
        var NAVimg = document.createElement("nav");
        NAVimg.classList.add("Caixa__imagem");
        DIV.appendChild(NAVimg);
    
        var IMG = document.createElement("img");
        IMG.src = element.poster;
        IMG.classList.add("Caixa__Imagem-animal");
        NAVimg.appendChild(IMG);
    
        var NAVcaixa = document.createElement("nav");
        NAVcaixa.classList.add("Caixa__Nav");
        DIV.appendChild(NAVcaixa);
    
        var Pnome = document.createElement("p");
        Pnome.textContent = element.titulo;
        Pnome.classList.add("Caixa__Item");
        NAVcaixa.appendChild(Pnome);
    
        var Ppreco = document.createElement("p");
        Ppreco.textContent = Formata.format(element.preco);
        Ppreco.classList.add("Caixa__Item");
        NAVcaixa.appendChild(Ppreco);
    
        var Botao = document.createElement("button");
        Botao.textContent = "Delete";
        Botao.classList.add("Caixa__Botao");
        DIV.appendChild(Botao);
    
        CaixaDIV.appendChild(DIV);
    });


    const Removendo = document.querySelectorAll(".Caixa__Botao");
    
    Removendo.forEach(element => {

        element.addEventListener("click", function(event) {

            var DivPai = event.target.parentNode;
            
            DivPai.classList.add("transparente");

            function ola() {
                DivPai.classList.add("removeELE");
            }

            setTimeout(ola, 500);
        });
    });

    inputDetexto.addEventListener("input", function() {

        produtos.forEach((element) => {

            var nomeAnimais = element.titulo;

            if(nomeAnimais != this.value) {

                
            }
        });
    });

}

window.addEventListener("load", Construindo(produtos));