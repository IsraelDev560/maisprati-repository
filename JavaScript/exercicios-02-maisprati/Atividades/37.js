function funcao37() {
    // 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
    // o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
    // respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
    // aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
    // e mostre uma mensagem de “REPROVADO”, caso contrário.
    function sortearLetras() {
        let letras = ['A', 'B', 'C', 'D'];
        let indice = Math.floor(Math.random() * letras.length);
        return letras[indice];
    }

    let gabarito = [];
    for (let j = 1; j <= 20; j++) {
        gabarito.push(sortearLetras());
    }

    let respostas = [];
    for (let i = 1; i <= 50; i++) {
        let aluno = {
            aluno: i,
            respostas: []
        };
        for (let k = 1; k <= 20; k++) {
            aluno.respostas.push(sortearLetras());
        }
        respostas.push(aluno);
    }

    for (let alunos of respostas) {
        let acertos = 0;
        for (let o = 1; o < alunos.respostas.length; o++) {
            if (alunos.respostas[o] === gabarito[o]) {
                acertos++;
            }
        }
        console.log(`Aluno ${alunos.aluno} teve ${acertos} acertos.`);
        if (acertos >= 12) {
            console.log("APROVADO");
        }
        else {
            console.log("REPROVADO");
        }
    }
}
module.exports.funcao37 = funcao37;