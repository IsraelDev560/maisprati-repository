function funcao24() {
    // 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
    // quantidade de elementos negativos da linha correspondente de M.

    let matriz = [
        [1, 2, -3, -4, 5, -6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15, 16],
        [17, 18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, -28, -29, 30, 31, 32],
        [33, 34, 35, -36, -37, -12, 39, 40],
        [41, 42, -43, 44, 45, 46, 47, 48],
    ];
    let vetor = [];
    let contadorNegativo = 0;
    for (let i = 0; i < matriz.length; i++) {
        contadorNegativo = 0;
        for (let j = 0; j < matriz[0].length; j++) {
            if (matriz[i][j] < 0) {
                contadorNegativo++;
            }
        }
        vetor.push(contadorNegativo);
    }
    console.table(vetor);
}
module.exports.funcao24 = funcao24;