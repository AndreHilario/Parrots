
const listaCards = ["img/bobrossparrot.gif", "img/bobrossparrot.gif", 
"img/explodyparrot.gif", "img/explodyparrot.gif", 
"img/fiestaparrot.gif", "img/fiestaparrot.gif", 
"img/metalparrot.gif", "img/metalparrot.gif", 
"img/revertitparrot.gif", "img/revertitparrot.gif",
"img/tripletsparrot.gif", "img/tripletsparrot.gif", 
"img/unicornparrot.gif", "img/unicornparrot.gif"];

const list = [];
function cartasAleatorias(){

    return Math.random() -0.5;
}

let numCard = 0;
let posicao = 0;

const cartas = document.querySelector('.jogo-da-memoria');
console.log(cartas);

function criarCartas(){

    list.sort(cartasAleatorias);
    while(posicao < numCard){

        

        let template = `
        <div onclick="virarCarta(this)" class="carta">
            <div class="face-card front-face-card"><img src="${list[posicao]}"></div>
            <div class="face-card back-face-card"><img src="img/back.png"></div>
        </div>
        `;

         cartas.innerHTML = cartas.innerHTML + template;
         posicao++;
    }
      
}


function pedirCartas(){
    const qtdCartas = prompt("Digite o número de cartas que quer jogar(de 4 a 14)");
    numCard = Number(qtdCartas);
    if(numCard === 4 || numCard === 6 || numCard === 8 || numCard === 10 || numCard === 12 || numCard === 14){
        for(let indice = 0; indice < numCard; indice++){
            list.push(listaCards[indice]);
            console.log(list);
        }
        for(let i = 0; i < numCard; i++){
            criarCartas();
        }
        
    } else {
        alert("Você digitou um número inválido");
        pedirCartas();
    }
}
pedirCartas();


function virarCarta(cartaClicada){


    const cartaAnterior = document.querySelector('.jogo-da-memoria .clicado');
    
    if (cartaAnterior !== null){

        cartaAnterior.classList.remove('clicado');
        
    } 
    cartaClicada.classList.add('clicado');

    const cartaGiro = document.querySelector('.jogo-da-memoria .clicado .back-face-card');
    if(cartaGiro.parentNode.classList.contains('clicado')){
        cartaGiro.classList.add('girar-back-face-card');
    } 
    
    
}






