function funcao42() {
    // 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
    // strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
    // propriedades que são arrays.

    function retornarObjeto(dados) {
        let novoObj = {};
        for (let key in dados) {
            if (Array.isArray(dados[key])) {
                novoObj[key] = dados[key];
            }
        }
        return novoObj;
    };
    let dados = {
        nome: "Carlão",
        numero: 78991541236,
        linguagens: ["JavaScripto", "NodeJS", "Java", "PHP", "HTML", "CSS"],
        ferramentas: ["VSCODE", "FIGMA", "GIT", "GITHUB"]
    };
    console.log(retornarObjeto(dados));
}
module.exports.funcao42 = funcao42;