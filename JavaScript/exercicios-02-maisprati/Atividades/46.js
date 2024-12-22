function funcao46() {
    // 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
    // com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
    // de vendas por vendedor.
    function calculoObj(obj) {
        let totalVendasPorVendedor = {};
        obj.forEach(obj => {
            if (!totalVendasPorVendedor[obj.vendedor]) {
                totalVendasPorVendedor[obj.vendedor] = obj.preco;
            }
            else {
                totalVendasPorVendedor[obj.vendedor] += obj.preco;
            }
        });
        return totalVendasPorVendedor;
    }
    let obj = [
        { vendedor: "Carlos", mercadoria: "Pão", preco: 0.50 },
        { vendedor: "José", mercadoria: "Melancia", preco: 7.50 },
        { vendedor: "Paulo", mercadoria: "Alface", preco: 2.00 },
        { vendedor: "André", mercadoria: "Pão de queijo", preco: 2.50 },
        { vendedor: "Romario", mercadoria: "Pastel", preco: 5.50 },
        { vendedor: "José", mercadoria: "Caldo de Cana", preco: 2.75 },
    ];
    console.log(calculoObj(obj));
}
module.exports.funcao46 = funcao46;