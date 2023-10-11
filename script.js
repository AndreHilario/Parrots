const versiculos = [
    "MAS, A TODOS QUANTOS O RECEBERAM, DEU-LHES O PODER DE",
    "SEREM FEITOS FILHOS DE DEUS, A SABER, AOS QUE CREEM NO SEU NOME. JOÃO 1:12",
    "E, VENDO JESUS PASSAR, DISSE:",
    "EIS O CORDEIRO DE DEUS! JOÃO 1:36",
    "LEAIS SÃO AS FERIDAS FEITAS PELO QUE AMA,",
    "PORÉM OS BEIJOS DE QUEM ODEIA SÃO ENGANOSOS. PROVÉRBIOS 27:6",
    "MEUS IRMÃOS, TENDE POR MOTIVO DE TODA ALEGRIA",
    "O PASSARDES POR VÁRIAS PROVAÇÕES. TIAGO 1:2",
    "SE, PORÉM, ALGUM DE VÓS NECESSITA DE SABEDORIA, PEÇA-A A DEUS,",
    "QUE A TODOS DÁ LIBERALMENTE E NADA LHES IMPROPERA; E SER-LHE-Á CONCEDIDA. TIAGO 1:5",
    "VÓS NÃO SABEIS O QUE SUCEDERÁ AMANHÃ. QUE É A VOSSA VIDA?",
    "SOIS, APENAS, COMO NEBLINA QUE APARECE POR INSTANTE E LOGO SE DISSIPA. TIAGO 4:14",
    "TORNAI-VOS, POIS, PRATICANTES DA PALAVRA E NÃO",
    "SOMENTE OUVINTES, ENGANANDO-VOS A VÓS MESMOS. TIAGO 1:22",
    "SE ALGUÉM ME SERVE, SIGA-ME, E, ONDE EU ESTOU,",
    "ALI ESTARÁ TAMBÉM MEU SERVO. E, SE ALGUÉM ME SERVIR, O PAI O HONRARÁ. JOÃO 12:26",
];

const versiculosCompletos = [
    "MAS, A TODOS QUANTOS O RECEBERAM, DEU-LHES O PODER DE SEREM FEITOS FILHOS DE DEUS, A SABER, AOS QUE CREEM NO SEU NOME. JOÃO 1:12",
    "SEREM FEITOS FILHOS DE DEUS, A SABER, AOS QUE CREEM NO SEU NOME. JOÃO 1:12 MAS, A TODOS QUANTOS O RECEBERAM, DEU-LHES O PODER DE",
    "E, VENDO JESUS PASSAR, DISSE: EIS O CORDEIRO DE DEUS! JOÃO 1:36",
    "EIS O CORDEIRO DE DEUS! JOÃO 1:36 E, VENDO JESUS PASSAR, DISSE:",
    "LEAIS SÃO AS FERIDAS FEITAS PELO QUE AMA, PORÉM OS BEIJOS DE QUEM ODEIA SÃO ENGANOSOS. PROVÉRBIOS 27:6",
    "PORÉM OS BEIJOS DE QUEM ODEIA SÃO ENGANOSOS. PROVÉRBIOS 27:6 LEAIS SÃO AS FERIDAS FEITAS PELO QUE AMA,",
    "MEUS IRMÃOS, TENDE POR MOTIVO DE TODA ALEGRIA O PASSARDES POR VÁRIAS PROVAÇÕES. TIAGO 1:2",
    "O PASSARDES POR VÁRIAS PROVAÇÕES. TIAGO 1:2 MEUS IRMÃOS, TENDE POR MOTIVO DE TODA ALEGRIA",
    "SE, PORÉM, ALGUM DE VÓS NECESSITA DE SABEDORIA, PEÇA-A A DEUS, QUE A TODOS DÁ LIBERALMENTE E NADA LHES IMPROPERA; E SER-LHE-Á CONCEDIDA. TIAGO 1:5",
    "QUE A TODOS DÁ LIBERALMENTE E NADA LHES IMPROPERA; E SER-LHE-Á CONCEDIDA. TIAGO 1:5 SE, PORÉM, ALGUM DE VÓS NECESSITA DE SABEDORIA, PEÇA-A A DEUS,",
    "VÓS NÃO SABEIS O QUE SUCEDERÁ AMANHÃ. QUE É A VOSSA VIDA? SOIS, APENAS, COMO NEBLINA QUE APARECE POR INSTANTE E LOGO SE DISSIPA. TIAGO 4:14",
    "SOIS, APENAS, COMO NEBLINA QUE APARECE POR INSTANTE E LOGO SE DISSIPA. TIAGO 4:14 VÓS NÃO SABEIS O QUE SUCEDERÁ AMANHÃ. QUE É A VOSSA VIDA?",
    "TORNAI-VOS, POIS, PRATICANTES DA PALAVRA E NÃO SOMENTE OUVINTES, ENGANANDO-VOS A VÓS MESMOS. TIAGO 1:22",
    "SOMENTE OUVINTES, ENGANANDO-VOS A VÓS MESMOS. TIAGO 1:22 TORNAI-VOS, POIS, PRATICANTES DA PALAVRA E NÃO",
    "SE ALGUÉM ME SERVE, SIGA-ME, E, ONDE EU ESTOU, ALI ESTARÁ TAMBÉM MEU SERVO. E, SE ALGUÉM ME SERVIR, O PAI O HONRARÁ. JOÃO 12:26",
    "ALI ESTARÁ TAMBÉM MEU SERVO. E, SE ALGUÉM ME SERVIR, O PAI O HONRARÁ. JOÃO 12:26 SE ALGUÉM ME SERVE, SIGA-ME, E, ONDE EU ESTOU,",
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

