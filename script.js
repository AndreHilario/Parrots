
const listaCards = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 
'tripletsparrot', 'unicornparrot', 'bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 
'tripletsparrot', 'unicornparrot'];


let numCard = 0;

const cartas = document.querySelector('.jogo-da-memoria');
console.log(cartas);

function criarCartas(){

    let template = `
        <div class="carta">
            <div class="face-card front-face-card"> </div>
            <div class="face-card back-face-card"><img src="img/back.png"></div>
        </div>`;

    cartas.innerHTML = cartas.innerHTML + template;
      
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

function cartasAleatorias(){

    return Math.random() -0.5;
}






