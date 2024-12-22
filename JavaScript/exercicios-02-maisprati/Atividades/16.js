function funcao16(){
// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

const vetor = [];
let numeros;
for (let i = 1; i <= 20; i++) {
    numeros = vetor.push(Math.floor(Math.random()* 99)) +1;

    vetor.sort((a, b) => {
        return a - b;
    });
}

console.log("Vetor ordenado:", vetor);
}
module.exports.funcao16 = funcao16;