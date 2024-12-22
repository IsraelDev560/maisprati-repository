function funcao33() {
    // 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
    // elementos da diagonal principal com a média dos elementos da diagonal secundária.
    let matriz = [
        [1, 2, 3],
        [1, 6, 4],
        [3, 2, 9]
    ]
    let diagonal = 0;
    let segundoDiagonal = 0;
    let media = 0;
    let resultado = 0;
    let contador = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === j) {
                diagonal += matriz[i][j];
            }
            if (j === matriz[i].length - i - 1) {
                segundoDiagonal += matriz[i][j];
                contador++;
                media = segundoDiagonal / contador;
            }
        }
    }
    resultado = diagonal * media;
    console.log(resultado);
}
module.exports.funcao33 = funcao33;
