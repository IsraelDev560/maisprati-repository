function funcao23() {
    // 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
    // // diagonal principal são iguais a 1 e os demais são nulos.
    const matriz = [];
    let vetor = [];
    for (let i = 0; i < 7; i++) {
        vetor = [];
        for (let j = 0; j < 7; j++) {
            if (i === j) {
                vetor.push(1);
            } else {
                vetor.push(0);
            }
        }
        matriz.push(vetor);
    }
    console.table(matriz);
}
module.exports.funcao23 = funcao23;