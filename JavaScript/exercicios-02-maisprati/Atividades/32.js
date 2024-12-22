function funcao32() {
    // 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
    // cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
    // matriz lida e a modificada.

    let matriz = [
        [12, -1, 4, 10, 3, 5, -9, 8, 7, 2, 0, 6, -11],
        [2, 18, -5, 4, 12, 15, 3, -7, 6, 11, -8, 9, 10],
        [8, -13, 2, 4, 9, 5, 6, 1, -10, 3, 7, 12, 11],
        [10, 3, 5, 7, -2, 8, 6, 1, -4, 11, 9, -12, 13],
        [4, 5, 9, 8, 3, 2, 10, -7, 12, 6, 1, -11, -13],
        [6, 11, 2, 7, 4, 5, 9, -3, 8, 10, -12, 13, 1],
        [8, 9, 10, -11, 3, 5, 4, 2, 6, 12, -13, 7, 1],
        [7, 2, 8, -10, 4, 5, 9, 6, 1, 3, 11, -12, 13],
        [5, 4, 3, 8, 9, 7, -6, 2, 1, -10, 11, 12, -13],
        [9, 8, 4, -6, 10, 2, 5, 3, 1, 12, -11, 7, 13],
        [11, 12, 6, -5, 7, 3, 2, 1, 4, 8, 10, -9, 13],
        [3, 4, 5, 7, 8, 9, 1, 6, 2, 10, -12, -11, 13]
    ];

    console.log("Matriz original:");
    console.table(matriz);

    for (let i = 0; i < matriz.length; i++) {
        let maiorValor = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            let valorAtual = Math.abs(matriz[i][j]);
            if (valorAtual > maiorValor) {
                maiorValor = valorAtual;
            }
        }
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = parseFloat((matriz[i][j] / maiorValor).toFixed(2));
        }
    }

    console.log("Matriz Modificada: ");
    console.table(matriz);
}
module.exports.funcao32 = funcao32;