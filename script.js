
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
            <div class="back-card face-card"><img src="${list[posicao]}"></div>
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

    if(cartaClicada.classList.contains("girar")){

        return;
    }

    if(firstClick !== undefined && secondClick !== undefined){

        return;
    }

    if(firstClick === undefined || secondClick === undefined){
    
        jogadas++;
        console.log(jogadas);
    
    }
    if(firstClick === undefined){
        cartaClicada.classList.add("girar");
        firstClick = cartaClicada;
    
        

    } else if(firstClick !== undefined && secondClick === undefined){
        cartaClicada.classList.add("girar");
        secondClick = cartaClicada;
        

        if (firstClick.innerHTML === secondClick.innerHTML){
            manterCartas();
            total = total + 2;
            setTimeout(fim, 1000);
        } else {
            setTimeout(desvirarCartas, 1000);

        }
    }
     
}

function manterCartas(){
    
    firstClick = undefined;
    secondClick = undefined;
    return;
}

function desvirarCartas(){

    firstClick.classList.remove('girar');
    secondClick.classList.remove('girar');
    
    
    firstClick = undefined;
    secondClick = undefined;
    
}

let total = 0;

function fim(){
    if(numCard === total){
        alert(`Você ganhou em ${jogadas} jogadas!`);

    }
}

