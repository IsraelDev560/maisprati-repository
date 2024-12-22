// 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
// divididos por 11, dão resto igual a 5.

let numero = 1000;

while (numero <= 1999) {

    if (numero % 11 == 5) {
        console.log(numero);
    } numero++;
}