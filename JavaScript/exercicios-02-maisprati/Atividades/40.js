function funcao40() {
    // 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
    // resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
    // cada), representando as apostas feitas. Compare os números das apostas com o
    // resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
    // corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
    // e quadras, apenas por quinas.)

    let vetorGabarito = [2, 6, 1, 4, 5];

    let matriz = [];
    for (let i = 0; i < 50; i++) {
        matriz[i] = [];
        for (let k = 0; k < 5; k++) {
            let numeroAleatorio = Math.ceil(Math.random() * 10);
            let numeroJaExiste = false;
            for (let j = 0; j < matriz[i].length; j++) {
                if (numeroAleatorio === matriz[i][j]) {
                    numeroJaExiste = true;
                }
            }
            if (numeroJaExiste) {
                k--;
            } else {
                matriz[i].push(numeroAleatorio);
            }
        }
    }
    for (let i = 0; i < matriz.length; i++) {
        let acertos = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            for (let o = 0; o < vetorGabarito.length; o++) {
                if (matriz[i][j] === vetorGabarito[o]) {
                    acertos++;
                }
            }
        }
        if (acertos === 5) {
            console.log("GANHADOR: " + matriz[i].join(', '));
        }
    }
    console.log("Gabarito: " + vetorGabarito.join(', '));
}
module.exports.funcao40 = funcao40;