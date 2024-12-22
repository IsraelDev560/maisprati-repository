function funcao18() {
    // 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
    // um funcionário e ao final escreva o conteúdo do registro.

    const prompt = require('prompt-sync')();

    const funcionario = [];

    let nome = prompt("Digite seu nome: ");
    let cargo = prompt("Digite seu cargo: ");
    let salario = prompt("Digite seu salário: ");
    funcionario.push({ nome: nome, cargo: cargo, salario: salario });

    funcionario.forEach(registro => {
        console.log("\n--- Funcionarios(a) ---")
        console.log(`Nome: ${registro.nome}\nCargo: ${registro.cargo}\nSalário: ${registro.salario}`);
    });
}
module.exports.funcao18 = funcao18;