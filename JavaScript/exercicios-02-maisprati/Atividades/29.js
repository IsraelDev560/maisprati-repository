function funcao29() {
    // 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
    // a) da linha 4 de M;
    // b) da coluna 2 de M;
    // c) da diagonal principal;
    // d) todos os elementos da matriz M.
    // Escrever essas somas e a matriz.
    let matriz = [
        [77, 45, 23, 61, 89],
        [14, 98, 30, 52, 7],
        [35, 68, 2, 56, 81],
        [10, 95, 42, 73, 17],
        [39, 84, 6, 28, 51]
    ];

    let somaLinha = 0;
    let somaColuna = 0;
    let somaDiagonal = 0;
    let somaTotal = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === 4) {
                somaLinha += matriz[i][j];
            }
            if (j === 2) {
                somaColuna += matriz[i][j];
            }
            if (i === j) {
                somaDiagonal += matriz[i][j];
            }
            somaTotal += matriz[i][j];
        }
    }
    console.log("Soma total dos números da 4° linha: " + somaLinha);
    console.log("Soma total dos números da coluna 2: " + somaColuna);
    console.log("Soma total dos números na diagonal: " + somaDiagonal);
    console.log("Soma total dos números da matirz: " + somaTotal);
    console.table(matriz);
}
module.exports.funcao29 = funcao29;