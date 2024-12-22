function funcao39() {
    // 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
    // vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

    function gerarVetor() {
        let vetorA = [];
        let vetorB = [];

        for (let j = 1; j <= 100; j++) {
            let numero1 = Math.ceil(Math.random() * 20);
            let numero2 = Math.ceil(Math.random() * 20);
            let numeroAleatorio = numero1 - numero2;
            vetorA.push(numeroAleatorio);
        }

        vetorB = vetorA.filter(elemento => elemento != null && elemento >= 0);

        return { vetorA, vetorB };
    }
    let { vetorA, vetorB } = gerarVetor();
    console.log(vetorA);
    console.log(vetorB);
}
module.exports.funcao39 = funcao39;




