const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const tempoObjetivo1 = new Date("2025-07-06T00:00:00");
const tempoObjetivo2 = new Date("2026-12-06T00:00:00");
const tempoObjetivo3 = new Date("2026-08-06T00:00:00");
const tempoObjetivo4 = new Date("2026-07-10T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal > 0) {
        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        // Retornamos um ARRAY de números para facilitar o uso depois
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    // Usamos um loop para percorrer todos os 4 objetivos (tempos)
    for (let i = 0; i < tempos.length; i++) {
        let resultado = calculaTempo(tempos[i]);

        document.getElementById("dias" + i).textContent = resultado[0];
        document.getElementById("horas" + i).textContent = resultado[1];
        document.getElementById("min" + i).textContent = resultado[2];
        document.getElementById("seg" + i).textContent = resultado[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
