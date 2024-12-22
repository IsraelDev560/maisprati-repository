function funcao48() {
    
    // 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
    // inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
    // item em estoque. Escreva uma função que combine os inventários em um único objeto.
    // Se um item aparecer em ambas as lojas, some as quantidades.

    function somar(inventarioLojaA, inventarioLojaB) {
        let inventarioCombinado = { ...inventarioLojaA };
        for (let item in inventarioLojaB) {
            if (inventarioCombinado[item]) {
                inventarioCombinado[item] += inventarioLojaB[item];
            } else {
                inventarioCombinado[item] = inventarioLojaB[item];
            }
        }
        return inventarioCombinado;
    }
    let inventarioLojaA = { papelHigienico: 22, uva: 12, chocolate: 2, bolacha: 14, bergamota: 10, caderno: 5, lapis: 12, caneta: 8 };
    let inventarioLojaB = { uva: 4, chocolate: 32, chaveiro: 4, pao: 32, televisao: 2, caderno: 12, lapis: 2, caneta: 3, borracha: 5 };
    console.log(somar(inventarioLojaA, inventarioLojaB));
}
module.exports.funcao48 = funcao48;