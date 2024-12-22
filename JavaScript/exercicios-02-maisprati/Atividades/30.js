function funcao30() {
    // 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
    // contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
    // e os vetores criados.
    let matriz = [
        [5, 8, 3, 2, 7],
        [9, 1, 4, 7, 6],
        [6, 10, 2, 3, 8],
        [4, 7, 8, 5, 1],
        [10, 9, 6, 2, 4]
    ];
    let vetorL = [];
    let vetorC = [];

    for (let i = 0; i < matriz.length; i++) {
        let somaL = 0;
        let somaC = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            somaL += matriz[i][j];
            somaC += matriz[j][i];
        }
        vetorL.push(somaL);
        vetorC.push(somaC);
    }
    console.log("A soma das linhas é: " + vetorL);
    console.log("A Soma das colunas é: " + vetorC);
    console.table(matriz);
}
module.exports.funcao30 = funcao30;