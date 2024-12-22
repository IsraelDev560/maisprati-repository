// 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
// calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// 3 x N = 3N

const prompt = require("prompt-sync")();

let numero;

for (let colocar = 0; colocar < 5; colocar++) {
    numero = parseInt(prompt("Digite um valor: "))
    if (isNaN(numero)) {
        console.log("Isso não é um número!!");
        break;
    } else {
        for (contador = 1; contador <= numero; contador++) {
            console.log(`${numero} * ${contador} = `, numero * contador);

        }
    }
}