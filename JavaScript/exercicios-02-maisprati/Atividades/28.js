function funcao28() {
    // 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
    // item:
    // a) a soma dos elementos acima da diagonal principal;
    // b) a soma dos elementos abaixo da diagonal principal;

    let matriz = [
        [67, 25, 82, 49, 33, 76, 41, 92, 15, 58],
        [11, 89, 37, 70, 5, 88, 62, 96, 20, 54],
        [46, 79, 28, 61, 7, 98, 22, 73, 44, 86],
        [18, 92, 53, 35, 10, 69, 81, 31, 60, 2],
        [74, 12, 64, 29, 39, 90, 51, 3, 84, 17],
        [59, 97, 23, 45, 68, 14, 85, 26, 56, 93],
        [38, 6, 77, 19, 50, 65, 32, 78, 42, 71],
        [24, 72, 43, 99, 9, 30, 57, 83, 36, 63],
        [75, 27, 94, 16, 66, 4, 87, 21, 55, 48],
        [34, 80, 1, 95, 47, 52, 91, 8, 40, 100],
        [4, 7, 8, 5, 8, 2, 1, 5, 6, 3]
    ];

    let somaAcima = 0;
    let somaAbaixo = 0;
    let vetor = [];

    for (let linha = 0; linha < matriz.length; linha++) {
        for (let coluna = 0; coluna < matriz[linha].length; coluna++) {

            if (linha > coluna) {
                somaAbaixo += matriz[linha][coluna]
                console.log("Abaixo: " + somaAbaixo);
            }
            else if (coluna > linha) {
                somaAcima += matriz[linha][coluna]
                console.log("Acima: " + somaAcima);
            } else {
                vetor.push(matriz[linha][coluna])
            }
        }

    }
    console.table(vetor);
}
module.exports.funcao28 = funcao28;
