function funcao44() {
    // 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
    // objeto e retorne esse número.

    function findingString(obj) {
        let count = 0;
        for (let key in obj) {
            const valor = obj[key];
            if (typeof valor === 'string') {
                count++;
            }
        }
        return "esse objeto tem: " + count + " Strings";
    }

    let obj = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2021,
        cor: "Prata",
        motor: "2.0L",
        combustivel: "Gasolina",
        transmissao: "Automática",
        quilometragem: 15000,
        preco: 85000,
        disponivel: true
    }
    console.log(findingString(obj));
}
module.exports.funcao44 = funcao44;