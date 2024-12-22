function funcao38() {
    // 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
    // variável identificadora que calcule a operação conforme a informação contida nesta
    // variável:
    // 1- soma dos elementos;
    // 2- produto dos elementos;
    // 3- média dos elementos;
    // 4- ordene os elementos em ordem crescente;
    // 5- mostre o vetor.
    const prompt = require("prompt-sync")();
    function menu() {
        console.log(`----- MENU DE OPÇÕES -----\n
1 - Soma dos elementos\n
2 - Produto dos elementos\n
3 - Média dos elementos\n
4 - Ordenando os elementos em ordem crescente\n
5 - Mostrando o vetor\n`)
    }
    menu();
    main();
    function main() {
        let condicao = true;
        const vetorOriginal = gerarVetor();
        do {
            const vetorAleatorio = vetorOriginal.slice()
            let operacoes = parseInt(prompt("******* Escolha a opção: "))
            switch (operacoes) {
                case 1:
                    soma(vetorAleatorio);;
                    break;
                case 2:
                    produto(vetorAleatorio);
                    break;
                case 3:
                    media(vetorAleatorio);
                    break;
                case 4:
                    ordenacao(vetorAleatorio);
                    break
                case 5:
                    console.log(vetorAleatorio);
                    break;
                default:
                    console.log("Opção inválida, ou não encontrada.")
            }
            let opcao = prompt("Deseja continuar ? (Digite apenas 'sim' ou 'nao') ").toLowerCase();
            if (opcao === 'nao') {
                condicao = false;
            }
        } while (condicao)

        function gerarVetor() {
            let vetor = [];
            for (let j = 1; j <= 6; j++) {
                vetor.push(Math.ceil(Math.random() * 20));
            }
            return vetor;
        }

        function soma(vetor) {
            let resultado = 0;
            for (let somas of vetor) {
                resultado += somas;
            }
            console.log(`A Soma dos números é ${resultado}`);
        }

        function produto(vetor) {
            let resultado = 1;
            for (let produto of vetor) {
                resultado *= produto;
            }
            console.log(`O produto dos elementos é ${resultado}`);
        }

        function media(vetor) {
            let resultado = 0;
            for (let somas of vetor) {
                resultado += somas;
            }
            let media = resultado / vetor.length;;
            console.log(`A media dos elementos é ${media.toFixed(2)}`)
        }

        function ordenacao(vetor) {
            vetor.sort((a, b) => {
                return a - b;
            });
            console.log(vetor)
        }
    }
}
module.exports.funcao38 = funcao38;