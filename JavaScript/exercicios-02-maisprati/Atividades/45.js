function funcao45() {
    // 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
    // o número de vezes que a string aparece no array.
    function contandoObjetos(arrayDeStrings) {
        let obj = {};
        arrayDeStrings.forEach((element) => {
            if (obj[element]) {
                obj[element]++;
            }
            else {
                obj[element] = 1;
            }
        });
        return obj;
    }
    let arrayDeStrings = ["maçã", "banana", "laranja", "uva", "manga", "banana", "maçã"];
    console.log(contandoObjetos(arrayDeStrings));
}
module.exports.funcao45 = funcao45;

