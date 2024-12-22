function funcao27() {
    // 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
    // multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
    // um vetor V(36). Escrever o vetor V no final.
    function matriz6x6() {
        let matrizM = [
            [5, 8, 2, 7, 3, 9],
            [1, 4, 6, 2, 8, 3],
            [9, 2, 7, 4, 6, 1],
            [3, 6, 8, 1, 5, 2],
            [7, 3, 5, 9, 2, 8],
            [4, 1, 9, 3, 7, 6]
        ];
        let vetorV = [];
        let a = 5;
        for (let i = 0; i < matrizM.length; i++) {
            vetorV[i] = [];
            for (let j = 0; j < matrizM[i].length; j++) {
                vetorV[i][j] = matrizM[i][j] * a;
            }
        }
        console.table(vetorV);
    }
    matriz6x6();
}
module.exports.funcao27 = funcao27;