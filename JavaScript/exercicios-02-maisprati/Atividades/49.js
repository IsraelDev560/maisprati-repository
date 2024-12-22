function funcao49() {
    // 49. Você recebe um array de objetos representando transações financeiras. Cada
    // transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
    // onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
    // essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
    function retorno(transacoes) {
        let categorias = {};
        for (let transacao of transacoes) {
            if (!categorias[transacao.categoria]) {
                categorias[transacao.categoria] = { transacoes: [], subtotal: 0 }
            }
            categorias[transacao.categoria].transacoes.push({
                id: transacao.id,
                valor: transacao.valor,
                data: transacao.valor
            });
            categorias[transacao.categoria].subtotal += transacao.valor;
        }
        let json = JSON.stringify(categorias, null, 4);
        return json;
    }
    let transacoes = [
        { id: 1, valor: 155.56, data: "15/04/2024", categoria: "PIX" },
        { id: 2, valor: 256, data: "26/04/2024", categoria: "Deposito" },
        { id: 3, valor: 50.85, data: "02/04/2024", categoria: "Ted" },
        { id: 4, valor: 160, data: "18/04/2024", categoria: "PIX" },
        { id: 5, valor: 235, data: "22/04/2024", categoria: "Deposito" },
        { id: 6, valor: 50, data: "06/04/2024", categoria: "Ted" }
    ]
    console.log(retorno(transacoes));
}
module.exports.funcao49 = funcao49;