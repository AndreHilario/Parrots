
const listaCards = ['back', 'bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 
'tripletsparrot', 'unicornparrot', 'back', 'bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 
'tripletsparrot', 'unicornparrot'];

let numCard = 0;

function pedirCartas(){
    const qtdCartas = prompt("Digite o número de cartas que quer jogar(de 4 a 14)");
    numCard = Number(qtdCartas);
    if(numCard === 4 || numCard === 6 || numCard === 8 || numCard === 10 || numCard === 12 || numCard === 14){
        console.log('1');
    } else {
        alert("Você digitou um número inválido");
        pedirCartas();
    }
}
pedirCartas();

