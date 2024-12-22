function funcao25() {
  // 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
  // de cada coluna separadamente.

  function matrizesSomando() {

    let matriz = [
      [1.23, 4.56, 7.89, 2.34, 5.67, 8.91, 3.45, 6.78, 9.01, 1.12, 4.45, 7.78, 2.21, 5.54, 8.87, 3.30, 6.63, 9.96, 1.19, 4.42],
      [7.65, 3.43, 6.21, 9.87, 5.65, 8.43, 2.21, 5.99, 8.77, 1.55, 4.33, 7.11, 0.89, 3.67, 6.45, 9.23, 5.01, 8.79, 2.57, 5.35],
      [8.62, 2.41, 5.23, 8.05, 1.84, 4.66, 7.48, 1.27, 4.09, 6.91, 9.73, 3.52, 6.34, 9.16, 2.95, 5.77, 8.59, 2.38, 5.20, 8.02],
      [4.03, 7.42, 1.81, 5.20, 8.59, 2.98, 6.37, 9.76, 4.15, 7.54, 1.93, 5.32, 8.71, 3.10, 6.49, 9.88, 4.27, 7.66, 2.05, 5.44],
      [8.83, 3.52, 6.21, 9.90, 5.59, 8.28, 1.97, 4.66, 7.35, 0.04, 3.73, 6.42, 9.11, 4.80, 8.49, 2.18, 5.87, 8.56, 1.25, 4.94],
      [9.30, 3.09, 6.88, 1.67, 5.46, 9.25, 3.04, 6.83, 0.62, 4.41, 8.20, 1.99, 5.78, 9.57, 3.36, 7.15, 0.94, 4.73, 8.52, 2.31],
      [4.10, 7.18, 1.26, 5.34, 8.42, 2.50, 6.58, 9.66, 3.74, 6.82, 9.90, 4.98, 8.06, 2.14, 5.22, 8.30, 2.38, 6.46, 9.54, 3.62],
      [6.91, 1.70, 5.49, 9.28, 4.07, 7.86, 2.65, 6.44, 0.23, 4.02, 7.81, 2.60, 6.39, 1.18, 4.97, 8.76, 3.55, 7.34, 0.13, 3.92],
      [8.14, 1.83, 5.52, 9.21, 3.90, 7.59, 1.28, 5.97, 9.66, 4.35, 8.04, 1.73, 5.42, 9.11, 3.80, 7.49, 2.18, 5.87, 9.56, 4.25],
      [7.35, 0.84, 4.63, 8.42, 2.21, 6.00, 9.79, 4.58, 8.37, 3.16, 6.95, 1.74, 5.53, 9.32, 4.11, 7.90, 2.69, 6.48, 1.27, 5.06],
      [5.21, 8.30, 2.39, 6.48, 9.57, 3.66, 7.75, 0.84, 4.93, 8.02, 2.11, 6.20, 9.29, 3.38, 7.47, 0.56, 4.65, 8.74, 2.83, 6.92],
      [8.81, 3.50, 7.19, 1.88, 5.57, 9.26, 3.95, 7.64, 2.33, 6.02, 9.71, 4.40, 8.09, 2.78, 6.47, 1.16, 4.85, 8.54, 3.23, 5.92],
      [8.49, 2.28, 6.07, 9.86, 4.65, 8.44, 3.23, 7.02, 0.81, 4.60, 8.39, 2.18, 5.97, 9.76, 4.55, 8.34, 3.13, 6.92, 0.71, 4.50],
      [8.86, 3.55, 7.24, 1.93, 5.62, 9.31, 3.00, 6.69, 1.38, 5.07, 8.76, 3.45, 7.14, 0.83, 4.52, 8.21, 2.90, 6.59, 1.28, 4.97],
      [8.24, 2.03, 5.82, 9.61, 4.40, 8.19, 2.98, 6.77, 1.56, 5.35, 9.14, 3.93, 7.72, 2.51, 6.30, 9.09, 3.88, 7.67, 1.46, 5.25]
    ];

    let somasColunas = [];
    let soma;

    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
      soma = 0;
      for (let linha = 0; linha < matriz.length; linha++) {
        soma += matriz[linha][coluna];
      }
      somasColunas.push(soma.toFixed(2));
    }

    console.table(somasColunas);
  }
  matrizesSomando();
}
module.exports.funcao25 = funcao25;