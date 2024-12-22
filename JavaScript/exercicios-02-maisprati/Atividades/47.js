function funcao47() {
   // 47. Crie uma função que transforme um objeto de entrada aplicando uma função
   // fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
   // resultados.
   
   function transforme(pessoas) {
      let transformado = {};
      pessoas.forEach(pessoa => {
         transformado[pessoa.nome] = pessoa.nome.toUpperCase();
      });
      return transformado;
   }
   let pessoas = [
      { nome: "Carlos", idade: 22 },
      { nome: "José", idade: 40 },
      { nome: "Paulo", idade: 25 }
   ];
   console.log(transforme(pessoas));
}
module.exports.funcao47 = funcao47;