
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
        <div onclick="viraCarta(this)" class="carta">
            <div class="face-card"><img src="img/back.png"></div>
            <div class="back-face-card face-card"><img src="${list[posicao]}"></div>
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

let jogadas = 0;
let firstClick;
let secondClick;


function viraCarta(cartaClicada){

    const cartaAnterior = document.querySelector('.clicado');
    
    if (cartaAnterior !== null){

        cartaAnterior.classList.remove('clicado');
       
    } 
    cartaClicada.classList.add('clicado');


    jogadas++;
    console.log(jogadas);

    if(firstClick === undefined){
        firstClick = cartaClicada.innerHTML;
        console.log(firstClick);
        const carta1 = document.querySelector('.clicado .back-face-card');
        carta1.classList.add('girar-back');

    } else if(firstClick !== undefined && secondClick === undefined){
        secondClick = cartaClicada.innerHTML;
        console.log(secondClick);
        const carta2 = document.querySelector('.clicado .back-face-card');
        carta2.classList.add('girar-back');
        if (firstClick === secondClick){
            manterCartas();
            total = total + 2;

            fim();
        } else {
            setTimeout(desvirarCartas, 1000);
        }
    }
    
}

function manterCartas(){
    return;
}

function desvirarCartas(){

    //const cartaGiro = document.querySelector('.girar-back');

    //cartaGiro.classList.remove('girar-back');
    //cartaGiro.classList.add('girar-front');
    

    const second = document.querySelector('.clicado .back-face-card');
    second.classList.remove('girar-back');
    second.classList.add('girar-front');


    firstClick = undefined;
    secondClick = undefined;
    
}

let total = 0;

function fim(){
    if(numCard === total){
        alert(`Você ganhou em ${jogadas} jogadas!`);
    }
}

