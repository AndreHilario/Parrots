const versiculos = [
    "O Senhor é meu Pastor",
    "nada me faltará - Salmos 23:1",
    "Porque Deus amou o mundo",
    "de tal maneira que deu o seu Filho unigênito - João 3:16a",
    "Todos pecaram e",
    "carecem da glória de Deus - Romanos 3:23",
    "No princípio, criou",
    "Deus os céus e a terra - Gênesis 1:1",
    "Alegrei-me quando me disseram:",
    "vamos à casa do Senhor - Salmos 122:1",
    "Se confessarmos os nossos pecados",
    "Ele é fiel e justo para nos perdoar o pecado e nos purificar de toda injustiça - 1João 1:9",
    "Lâmpada para os meus pés é a tua palavra",
    "e, luz para os meus caminhos - Salmos 119:105",
    "Guardo no coração as tuas palavras,",
    "para não pecar contra ti - Salmos 119:11",
    "Porque o salário do pecado é a morte,",
    "mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor - Romanos 6:23",
    "No princípio era o Verbo, e o Verbo estava com Deus,",
    "e o Verbo era Deus - João 1:1",
    "Alegrai-vos sempre no Senhor;",
    "outra vez digo: alegrai-vos - Filipenses 4:4",
    "Deus é o nosso refúgio e fortaleza,",
    "socorro bem presente nas tribulações - Salmos 46:1"
];

const versiculosCompletos = [
"O Senhor é meu Pastor nada me faltará - Salmos 23:1", 
"nada me faltará - Salmos 23:1 O Senhor é meu Pastor",
"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito - João 3:16a",
"de tal maneira que deu o seu Filho unigênito - João 3:16a Porque Deus amou o mundo",
"Todos pecaram e carecem da glória de Deus - Romanos 3:23",
"carecem da glória de Deus - Romanos 3:23 Todos pecaram e",
"No princípio, criou Deus os céus e a terra - Gênesis 1:1",
"Deus os céus e a terra - Gênesis 1:1 No princípio, criou",
"Alegrei-me quando me disseram: vamos à casa do Senhor - Salmos 122:1",
"vamos à casa do Senhor - Salmos 122:1 Alegrei-me quando me disseram:",
"Se confessarmos os nossos pecados Ele é fiel e justo para nos perdoar o pecado e nos purificar de toda injustiça - 1João 1:9",
"Ele é fiel e justo para nos perdoar o pecado e nos purificar de toda injustiça - 1João 1:9 Se confessarmos os nossos pecados",
"Lâmpada para os meus pés é a tua palavra e, luz para os meus caminhos - Salmos 119:105",
"e, luz para os meus caminhos - Salmos 119:105 Lâmpada para os meus pés é a tua palavra",
"Guardo no coração as tuas palavras, para não pecar contra ti - Salmos 119:11",
"para não pecar contra ti - Salmos 119:11 Guardo no coração as tuas palavras,",
"Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor - Romanos 6:23",
"mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor - Romanos 6:23 Porque o salário do pecado é a morte,",
"No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus - João 1:1",
"e o Verbo era Deus - João 1:1 No princípio era o Verbo, e o Verbo estava com Deus,",
"Alegrai-vos sempre no Senhor; outra vez digo: alegrai-vos - Filipenses 4:4",
"outra vez digo: alegrai-vos - Filipenses 4:4 Alegrai-vos sempre no Senhor;",
"Deus é o nosso refúgio e fortaleza, socorro bem presente nas tribulações - Salmos 46:1",
"socorro bem presente nas tribulações - Salmos 46:1 Deus é o nosso refúgio e fortaleza,"
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

const numParesDeVersiculos = 12; 
const numCard = numParesDeVersiculos * 2; 

function pedirCartas() {
    for(let indice = 0; indice < numCard; indice++) {
        lista.push(versiculos[indice]);
    }
    for(let i = 0; i < numCard; i++) {
        criarCartas();
    }
        parada = setInterval(relogio, 1000);
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

