const versiculos = [
    "O SENHOR É MEU PASTOR",
    "NADA ME FALTARÁ - SALMOS 23:1",
    "PORQUE DEUS AMOU O MUNDO",
    "DE TAL MANEIRA QUE DEU O SEU FILHO UNIGÊNITO - JOÃO 3:16A",
    "TODOS PECARAM E",
    "CARECEM DA GLÓRIA DE DEUS - ROMANOS 3:23",
    "NO PRINCÍPIO, CRIOU",
    "DEUS OS CÉUS E A TERRA - GÊNESIS 1:1",
    "ALEGREI-ME QUANDO ME DISSERAM:",
    "VAMOS À CASA DO SENHOR - SALMOS 122:1",
    "SE CONFESSARMOS OS NOSSOS PECADOS ELE É FIEL E JUSTO",
    "PARA NOS PERDOAR O PECADO E NOS PURIFICAR DE TODA INJUSTIÇA - 1JOÃO 1:9",
    "LÂMPADA PARA OS MEUS PÉS É A TUA PALAVRA",
    "E, LUZ PARA OS MEUS CAMINHOS - SALMOS 119:105",
    "GUARDO NO CORAÇÃO AS TUAS PALAVRAS,",
    "PARA NÃO PECAR CONTRA TI - SALMOS 119:11",
];

const versiculosCompletos = [
    "O SENHOR É MEU PASTOR NADA ME FALTARÁ - SALMOS 23:1",
    "NADA ME FALTARÁ - SALMOS 23:1 O SENHOR É MEU PASTOR",
    "PORQUE DEUS AMOU O MUNDO DE TAL MANEIRA QUE DEU O SEU FILHO UNIGÊNITO - JOÃO 3:16A",
    "DE TAL MANEIRA QUE DEU O SEU FILHO UNIGÊNITO - JOÃO 3:16A PORQUE DEUS AMOU O MUNDO",
    "TODOS PECARAM E CARECEM DA GLÓRIA DE DEUS - ROMANOS 3:23",
    "CARECEM DA GLÓRIA DE DEUS - ROMANOS 3:23 TODOS PECARAM E",
    "NO PRINCÍPIO, CRIOU DEUS OS CÉUS E A TERRA - GÊNESIS 1:1",
    "DEUS OS CÉUS E A TERRA - GÊNESIS 1:1 NO PRINCÍPIO, CRIOU",
    "ALEGREI-ME QUANDO ME DISSERAM: VAMOS À CASA DO SENHOR - SALMOS 122:1",
    "VAMOS À CASA DO SENHOR - SALMOS 122:1 ALEGREI-ME QUANDO ME DISSERAM:",
    "SE CONFESSARMOS OS NOSSOS PECADOS ELE É FIEL E JUSTO PARA NOS PERDOAR O PECADO E NOS PURIFICAR DE TODA INJUSTIÇA - 1JOÃO 1:9",
    "PARA NOS PERDOAR O PECADO E NOS PURIFICAR DE TODA INJUSTIÇA - 1JOÃO 1:9 SE CONFESSARMOS OS NOSSOS PECADOS ELE É FIEL E JUSTO",
    "LÂMPADA PARA OS MEUS PÉS É A TUA PALAVRA E, LUZ PARA OS MEUS CAMINHOS - SALMOS 119:105",
    "E, LUZ PARA OS MEUS CAMINHOS - SALMOS 119:105 LÂMPADA PARA OS MEUS PÉS É A TUA PALAVRA",
    "GUARDO NO CORAÇÃO AS TUAS PALAVRAS, PARA NÃO PECAR CONTRA TI - SALMOS 119:11",
    "PARA NÃO PECAR CONTRA TI - SALMOS 119:11 GUARDO NO CORAÇÃO AS TUAS PALAVRAS,",
];


const lista = [];
function versiculosAleatorios(){

    return Math.random() -0.5;
}

let posicao = 0;
let jogadas = 0;
let firstClick;
let secondClick;
let total = 0;
let segundos = 0;
let parada;

const cartas = document.querySelector('.jogo-da-memoria');
const timer = document.querySelector('.timer');

function criarCartas() {
    lista.sort(versiculosAleatorios);
    while (posicao < numCard) {
        const template = `
        <div data-test="card" onclick="viraCarta(this)" class="carta">
            <div data-test="face-down-text" class="front-card face-card"><img src="img/back.png"></div>
            <div data-test="face-up-text" class="back-card face-card"><p>${lista[posicao]}</p></div>
        </div>
        `;

        cartas.innerHTML += template;
        posicao++;
    }
}

const numParesDeVersiculos = 8; 
const numCard = numParesDeVersiculos * 2; 

function pedirCartas() {
    for(let indice = 0; indice < numCard; indice++) {
        lista.push(versiculos[indice]);
    }
    for(let i = 0; i < numCard; i++) {
        criarCartas();
    }
        //parada = setInterval(relogio, 1000);
}

function viraCarta(cartaClicada) {
    if (cartaClicada.classList.contains("girar")) {
        return;
    }

    if (firstClick !== undefined && secondClick !== undefined) {
        return;
    }

    if (firstClick === undefined || secondClick === undefined) {
        jogadas++;
        console.log(jogadas);
    }

    if (firstClick === undefined) {
        cartaClicada.classList.add("girar");
        firstClick = cartaClicada;
    } else if (firstClick !== undefined && secondClick === undefined) {
        cartaClicada.classList.add("girar");
        secondClick = cartaClicada;
        const um = firstClick.querySelector('[data-test="face-up-text"]');
        const dois = secondClick.querySelector('[data-test="face-up-text"]');

        for (const versiculoCompleto of versiculosCompletos) {
            if (um.textContent + " " + dois.textContent === versiculoCompleto ){
                manterCartas();
                total = total + 2;
                setTimeout(fim, 800);
            } else {
                setTimeout(desvirarCartas, 2500);

            }
        }
    }
}

function manterCartas() {
    firstClick = undefined;
    secondClick = undefined;
    return;
}

function desvirarCartas() {
    if (firstClick && secondClick) {
        firstClick.classList.remove('girar');
        secondClick.classList.remove('girar');
        firstClick = undefined;
        secondClick = undefined;
    }
}


/* function relogio() {
    segundos++;
    timer.innerHTML = segundos;
} */

function fim() {
    if (numCard === total) {
        clearInterval(parada);
        alert(`Você ganhou em ${jogadas} jogadas!`);
        const reinicio = prompt("Você gostaria de reiniciar o jogo? (sim/não)");
        if (reinicio === "sim") {
            window.location.reload(true);
        } else if (reinicio === "não") {
            clearInterval(parada);
            timer.classList.remove('timer');
            return;
        } else {
            alert("Digite apenas sim ou não!")
            reinicio = prompt("Você gostaria de reiniciar o jogo? (sim/não)");
        }
    }
}

pedirCartas();

