function funcao22() {
    // 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
    // dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
    // número não determinado de pessoas e retorne a média de salário da população, a
    // média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
    // 350,00.
    const pessoas = [
        { nome: 'Carlos', filhos: 2, salario: 190 },
        { nome: 'Roberto', filhos: 5, salario: 1800 },
        { nome: 'Adriana', filhos: 4, salario: 1500 },
        { nome: 'Carla', filhos: 3, salario: 2200 },
        { nome: 'Roberta', filhos: 1, salario: 3000 },
        { nome: 'Ana', filhos: 2, salario: 150 },
        { nome: 'Samara', filhos: 3, salario: 240 }
    ];

    let baixaRenda = 0;
    let somafilhos = 0;
    let somaSalario = 0;
    let maiorSalario = 0;
    let salario350 = 0;

    let counter = 0;
    for (let i = 0; i < pessoas.length; i++) {
        counter++;
    }
    pessoas.forEach((element) => {
        somafilhos += element.filhos;
        somaSalario += element.salario;
        if (element.salario > maiorSalario) {
            maiorSalario = element.salario;
        }
        if (element.salario <= 350) {
            baixaRenda++;
            salario350 = baixaRenda * 100;
        }
    });

    console.log(`A Media de filhos é: ${(somafilhos / counter).toFixed(0)}`);
    console.log(`A Media Salarial é: ${(somaSalario / counter).toFixed(0)}`);
    console.log("O Maior Salario é: " + maiorSalario);
    console.log(`A Media de pessoas com salario até 350R$ é de: ${(salario350 / counter).toFixed(2)}% `);
}
module.exports.funcao22 = funcao22;