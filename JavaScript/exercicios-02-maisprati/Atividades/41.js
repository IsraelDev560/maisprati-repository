function funcao41() {
    // 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
    // idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
    // nome e idade.

    let pessoa = {
        nome: "Israel",
        idade: 19,
    };
    console.log(pessoa.idade);
    pessoa.email = "israelteste@gmail.com";
    console.log(pessoa);
}
module.exports.funcao41 = funcao41;