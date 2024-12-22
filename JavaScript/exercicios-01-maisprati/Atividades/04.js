// 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
// calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
// aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
// aprovação).
// 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
// média calculada seja menor que 6,0

const prompt = require("prompt-sync")()

console.log("Vamos conferir se você passou nesse semestre, abaixo digite suas notas. :)");
let nota1 = parseFloat(prompt("Digite a Primeira nota "));
let nota2 = parseFloat(prompt("Digite a Segunda nota "));
let media = (nota1 + nota2) / 2;

if (media >= 6) {
    console.log("PARABÉNS! Você foi aprovado");
} else if (media < 6) {
    console.log("Você foi REPROVADO! Estude mais");
} else if (isNaN(nota1 || nota2)) {
    console.log("Isso não é um número.");
} else {
    console.log("Nota indefinida!");
}