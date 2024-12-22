function funcao12() {
    // 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
    // Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
    let numero = 0;
    let numero1 = 1;
    for (i = 1; i <= 10; i++) {
        let calculo = numero + numero1;
        console.log(numero1);
        numero = numero1;
        numero1 = calculo;
    }
}
module.exports.funcao12 = funcao12;