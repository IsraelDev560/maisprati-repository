function funcao31() {
    // 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
    // Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
    // todos os elementos de V diferentes de A. Mostre os resultados.
    const matriz = [];
    for (let i = 0; i < 30; i++) {
        matriz[i] = [];
        for (let j = 0; j < 30; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100);  // Valores aleatórios entre 0 e 99
        }
    }
    let matrizDif = []
    let a = 1;
    let resultado = 0;
    for (let i = 0; i < matriz.length; i++) {
        matrizDif[i] = []
        for (let j = 0; j < matriz[i].length; j++) {
            if (a === matriz[i][j]) {
                resultado += matriz[i][j];
            } else if (matriz[i][j] !== a) {
                matrizDif[i].push(matriz[i][j]);
            }
        }
    }
    console.log(`Essa matriz possui ${resultado} elementos iguais a ${a}`);
    console.log(`Os Números diferentes de ${a} são:`);
    console.log(matrizDif);
}
module.exports.funcao31 = funcao31;