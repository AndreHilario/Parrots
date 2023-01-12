let content;
const listaCards = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 
'tripletsparrot', 'unicornparrot', 'bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 
'tripletsparrot', 'unicornparrot'];


let numCard = 0;

const cartas = document.querySelector('.jogo-da-memoria');
console.log(cartas);

function criarElementos(tag, divClass){
    const elemento = document.createElement(tag);
    elemento.className = divClass;
    return elemento;
}

function criarCartas(){
    const divCarta = criarElementos('div', 'carta');
    const divFrente = criarElementos('div', 'face-card front-face-card');
    const divBack = criarElementos('div', 'face-card back-face-card');
    
    divCarta.appendChild(divFrente);
    divCarta.appendChild(divBack);
    cartas.appendChild(divCarta);
    
    divBack.innerHTML = "<img src='img/back.png'>";
    

}


function pedirCartas(){
    const qtdCartas = prompt("Digite o número de cartas que quer jogar(de 4 a 14)");
    numCard = Number(qtdCartas);
    if(numCard === 4 || numCard === 6 || numCard === 8 || numCard === 10 || numCard === 12 || numCard === 14){
        for(let i = 0; i < numCard; i++){
            criarCartas();
        }
        
    } else {
        alert("Você digitou um número inválido");
        pedirCartas();
    }
}
pedirCartas();








