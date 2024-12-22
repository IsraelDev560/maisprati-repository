function funcao34() {
    // 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
    // cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
    // multiplicações.

    const matriz = [];
    for (let i = 0; i < 50; i++) {
        matriz[i] = [];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] = Math.floor(Math.random() * 50);  // Valores aleatórios entre 0 e 99
        }
    }
    let diagonal = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === j) {
                diagonal = matriz[i][j];
            }
            matriz[i][j] = diagonal * matriz[i][j];
        }
    }
    console.table(matriz);
}
module.exports.funcao34 = funcao34;


