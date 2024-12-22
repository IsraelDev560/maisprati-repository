function funcao20() {
    // 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
    // no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    // salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    // tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    // Matrícula:
    // Nome:
    // Salário bruto:
    // Dedução INSS:
    // Salário líquido:
    // (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
    // INSS).
    const funcionarios = [];
    const prompt = require('prompt-sync')();
    let condicao = true;
    let posicao = 1;

    while (condicao) {
        let matricula = parseInt(prompt("Digite o número da matricula do funcionario: "));
        let nome = prompt("Digite o nome do funcionario: ");
        let salarioBruto = parseFloat(prompt("Digite o salário do funcionario: "));
        let pergunta = prompt('Deseja continuar? (sim/nao): ').toLowerCase();

        console.log("\n")
        if (pergunta === 'nao') {
            condicao = false;
        }
        const INSS = 0.12;
        let salarioLiquido = salarioBruto * INSS;
        let resultado = salarioBruto - salarioLiquido;
        funcionarios.forEach(element => {
            posicao++;
        });
        funcionarios.push({ funcionario: posicao, matricula: matricula, nome: nome, salarioBruto: salarioBruto, descontoINSS: salarioLiquido + "R$ equivalente a 12% de desconto do INSS", salarioLiquido: resultado });

    }
    console.log(funcionarios);
}
module.exports.funcao20 = funcao20;