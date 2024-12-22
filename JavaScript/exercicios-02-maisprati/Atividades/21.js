function funcao21() {
    // 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
    // retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
    // = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
    const prompt = require('prompt-sync')();
    let alt = parseFloat(prompt("Digite a sua altura: "));
    let sexo = prompt("Digite o seu sexo (M OU F): ");

    function alturaIdeal(alt, sexo) {

        if (sexo === 'M') {
            let pesoIdeal = 72.7 * alt;
            let resultado = pesoIdeal - 58;
            console.log(`O peso ideal para você é: ${resultado.toFixed(2)}`);
        }
        else if (sexo === "F") {
            let pesoIdeal = 62.1 * alt;
            let resultado = pesoIdeal - 44.7;
            console.log(`O peso ideal para você é ${resultado.toFixed(2)}`);
        }
        else {
            console.log("Informação inválida.");
        }
    }
    alturaIdeal(alt, sexo);
}
module.exports.funcao21 = funcao21;