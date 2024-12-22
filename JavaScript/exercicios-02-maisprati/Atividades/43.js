function funcao43() {
    // 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
    // combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
    // sobre as do obj1 em caso de conflitos.

    function createObjt(obj1, obj2) {
        let newObj = obj1;
        for (let valor in obj2) {
            newObj[valor] = obj2[valor];
        }
        return newObj;
    }
    let obj1 = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2021,
        cor: "Prata",
        motor: "2.0L",
        combustivel: "Gasolina",
        transmissao: "Automática",
        quilometragem: 15000,
        preco: 85000,
        disponivel: true
    }

    let obj2 = {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        ano_publicacao: 1899,
        genero: "Romance",
        paginas: 256,
        editora: "Garnier",
        ISBN: "978-85-359-0277-1",
        idioma: "Português",
        capa_dura: false,
        preco: 35.59,
        disponivel: true
    }
    console.log(createObjt(obj1, obj2));
}
module.exports.funcao43 = funcao43;