function funcao35() {
    // 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
    // conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
    // estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
    // vetor pode ser preenchido quantas vezes forem necessárias.
    let vetorPar = [];
    let vetorImpar = [];
    let vetorDeValores = Array();
    for (let j = 0; j < 30; j++) {
        vetorDeValores.push(Math.ceil(Math.random() * 99));
    }
    for (let i = 0; i < vetorDeValores.length; i++) {
        let valor = vetorDeValores[i];
        if (valor % 2 === 0) {
            vetorPar.push(valor);
            if (vetorPar.length === 5) {
                console.log("Vetor par: ", vetorPar);
                vetorPar = [];
            }
        } else {
            vetorImpar.push(valor);
            if (vetorImpar.length === 5) {
                console.log("Vetor impar: ", vetorImpar);
                vetorImpar = [];
            }
        }
    }

    if (vetorPar.length > 0) {
        console.log('Vetor Par final:', vetorPar);
    }
    if (vetorImpar.length > 0) {
        console.log('Vetor Ímpar final:', vetorImpar);
    }
}
module.exports.funcao35 = funcao35;