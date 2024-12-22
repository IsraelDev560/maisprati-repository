function funcao13() {
    // 13 .Crie um programa que preencha automaticamente (usando lógica, não apenas
    //     atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    //     da sequência de Fibonacci.

    const numeros = [];

    let numero = 0;
    let numero1 = 1;
    for (i = 1; i <= 15; i++) {
        let calculo = numero + numero1;
        numeros.push(numero1)
        numero = numero1;
        numero1 = calculo;

    }
    console.log(`Primeiros 15 elementos da Sequência de Fibonacci: ${numeros}`);
}
module.exports.funcao13 = funcao13;
