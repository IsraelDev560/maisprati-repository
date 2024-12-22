function funcao07(){
// 07. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km
const prompt = require("prompt-sync")();
console.log("Escolha a opção:\n1 - Carro Popular | 2 - Carro de Luxo");
let carro = parseInt(prompt("Escolha qual o carro você utilizou: "));
let dias = parseInt(prompt("Digite quantos dias você utlizou o carro? "));
let kms = parseInt(prompt("Digite quantos KM'S você percorreu: "));

let carroPopular = 90;
let carroLuxo = 150;

function calcularDeCarro(carro, dias, kms) {
    let valorPopularMaior = 0.20 * kms;
    let valorPopularMenor2 = 0.10 * kms;
    let valorLuxoMaior = 0.30 * kms;
    let valorLuxoMenor = 0.25 * kms;
    let resultado = carroPopular * dias;
    let resultado2 = carroLuxo * dias;
    switch (carro) {
        case 1:
            if (kms <= 100) {
                console.log("Você utilizou um Carro Popular\nVocê rodou por " + kms + "KM'S e custou: R$" + valorPopularMaior);
                console.log("Utilizando o carro durante: " + dias + " Dia/Dias custando: R$" + resultado);
                console.log(`Total: R$ ${resultado + valorPopularMaior}`)
            } else {
                console.log("Você utilizou um Carro Popular\nVocê rodou por " + kms + "KM'S e custou: R$" + valorPopularMenor2);
                console.log("Utilizando o carro durante: " + dias + " Dia/Dias custando: R$" + resultado);
                console.log(`--- Preço do aluguel: R$ ${resultado + valorPopularMenor2}`);
            }
            break;
        case 2:
            if (kms <= 200) {
                console.log("Você utilizou um Carro Luxuoso\nVocê rodou por " + kms + "KM'S e custou: R$" + valorLuxoMaior);
                console.log("Utilizando o carro durante: " + dias + " Dia/Dias custando: R$" + resultado2);
                console.log(`Total: R$ ${resultado2 + valorLuxoMaior}`);
            } else {
                console.log("Você utilizou um Carro Luxuoso\nVocê rodou por " + kms + "KM'S e custou: R$" + valorLuxoMenor);
                console.log("Utilizando o carro durante: " + dias + " Dia/Dias custando: R$" + resultado2);
                console.log(`Total: R$ ${resultado2 + valorLuxoMenor}`);
            }
            break;
        default:
            console.log("Carro, ou dados invalidos.");
    }
}

calcularDeCarro(carro, dias, kms);
}
module.exports.funcao07 = funcao07;