function funcao17() {
    // 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
    // dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
    // os dados das pessoas menores de idade.

    const prompt = require('prompt-sync')();
    const vetorNome = [];
    const vetorIdade = [];
    const menorIdade = [];

    for (let i = 1; i <= 9; i++) {
        let nome = prompt("Digite um nome: ");
        let idade = parseInt(prompt("Digite sua idade: "));
        vetorNome.push(nome);
        vetorIdade.push(idade);
    };

    vetorIdade.forEach((element, posicao) => {
        if (vetorIdade[posicao] < 18) {
            menorIdade.push({ nome: vetorNome[posicao], idade: element })
        }
    });

    console.log(vetorNome);
    console.log(vetorIdade);

    console.log("As pessoas menores de idade são:");
    menorIdade.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    });
}
module.exports.funcao17 = funcao17;