function funcao26() {
    // 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
    // P[1..3,1..5].
    function matriz3por5() {
        let matrizA = [
            [4, 8, 2, 7, 3],
            [5, 1, 9, 6, 2],
            [3, 7, 1, 8, 4]
        ];
        let matrizB = [
            [9, 3, 6,],
            [8, 2, 7,],
            [6, 4, 9,],
            [8, 2, 1,],
            [9, 3, 6,]
        ];
        let vetor = [];
        let resultado;
        for (let linha = 0; linha < matrizA.length; linha++) {
            vetor.push([]);
            for (let coluna = 0; coluna < matrizB[linha].length; coluna++) {
                resultado = 0;
                for (let k = 0; k < matrizA[linha].length; k++) {
                    resultado += matrizA[linha][k] * matrizB[k][coluna];
                    console.log(`${matrizA[linha][k]} por ${matrizB[k][coluna]}`);
                }
                vetor[linha].push(resultado);
            }
        }
        console.table(vetor);
    }
    matriz3por5();
}
module.exports.funcao26 = funcao26;