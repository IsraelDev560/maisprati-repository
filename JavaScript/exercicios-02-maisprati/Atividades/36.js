function funcao36() {
    // 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
    // um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
    // do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
    // número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
    // o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
    // mensagem "Parabéns, tu foi o GANHADOR".
    let vetorGabarito = [];

    for (let j = 1; j <= 13; j++) {
        vetorGabarito.push(Math.ceil(Math.random() * 20));
    }
    let apostadores = [];
    for (let i = 1; i <= 100; i++) {
        let apostador = {
            numero: i,
            respostas: []
        };
        for (let k = 1; k <= 13; k++) {
            apostador.respostas.push(Math.ceil(Math.random() * 20));
        }
        apostadores.push(apostador)
    }

    for (let apostador of apostadores) {
        let acertos = 0;
        for (let o = 1; o < apostador.respostas.length; o++) {
            if (apostador.respostas[o] === vetorGabarito[o]) {
                acertos++;
            }
        }
        console.log(`Apostador ${apostador.numero} teve ${acertos} acertos.`);
        if (acertos === 13) {
            console.log("Parabéns, tu foi o GANHADOR");
        }
    }
}
module.exports.funcao36 = funcao36;