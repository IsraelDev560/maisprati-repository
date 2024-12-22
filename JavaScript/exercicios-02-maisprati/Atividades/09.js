function funcao09(){
// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.
const prompt = require("prompt-sync")();

const funcionarios = [
    { nome: 'Jurandir', sexo: 'Masculino', salario: 1800 },
    { nome: 'Paula', sexo: 'Feminino', salario: 1750 },
    { nome: 'Carla', sexo: 'Feminino', salario: 1810 }
]

const salariosFuncionarios = {};

function lerSalario(funcionarios) {
    while (true) {
        let pergunta = prompt("Você deseja adicionar um funcionario?(digite apenas sim/nao) ");
        if (pergunta == 'sim') {
            let nome = prompt("Digite o nome do funcionario(ex: Ronaldo) ");
            let sexo = prompt("Digite o sexo do funcionario(ex: 'Masculino' ou 'Feminino') ");
            let salario = parseFloat(prompt("Digite o salario do funcionario(ex: 1800) "));
            funcionarios.push({ nome, sexo, salario });

        } else {
            break;
        }
    };
    funcionarios.forEach(funcionario => {
        console.log(`Nome: ${funcionario.nome}, Sexo: ${funcionario.sexo}, Salário: ${funcionario.salario}`);
    })

    funcionarios.forEach(objeto => {
        const genero = objeto.sexo;
        const valor = objeto.salario;

        if (!salariosFuncionarios[genero]) {
            salariosFuncionarios[genero] = 0;
        }
        salariosFuncionarios[genero] += valor;
    });
    console.log("Salarios por gênero:", salariosFuncionarios);
}
lerSalario(funcionarios);
}
module.exports.funcao09 = funcao09;
