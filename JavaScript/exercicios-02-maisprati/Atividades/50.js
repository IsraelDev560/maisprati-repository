function funcao50() {
    // 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
    // deverá ser capaz de interagir com o usuário através do console do navegador e manter
    // um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
    // informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
    // 1. Estrutura de Dados:
    // ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
    // cidade, quartos totais e quartos disponiveis.
    // ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
    // nomeCliente.
    // 2. Funcionalidades:
    // ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
    // ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
    // disponíveis em uma cidade específica.
    // ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
    // deve diminuir o número de quartos disponiveis do hotel.
    // ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
    // aumentar o número de quartos disponiveis no hotel correspondente.
    // ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
    // cliente.
    // 3. Regras de Negócio:
    // ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
    // ○ As reservas devem ser identificadas por um ID único e associadas a um
    // único hotel.
    // 4. Desafios Adicionais (Opcionais):
    // ○ Implementar uma função de check-in e check-out que atualize a
    // disponibilidade de quartos.
    // ○ Gerar relatórios de ocupação para um hotel.
    // ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
    // avaliações dentro do objeto do hotel.

    const prompt = require("prompt-sync")();
    let hoteis = [];
    let reservas = [];
    let ultimoIdHotel = 0;
    let ultimoIdReserva = 0;

    function menu() {
        console.log(`\n---- Menu ---- \n1 - Adicionar Hotel\n2 - Buscar Hoteis por cidade \n3 - Fazer Reservas \n4 - Cancelar Reservas\n5 - Listar Reservas`);
    }
    function adicionarHotel() {
        let condicao = true;
        console.log("\n--- Adicionando Hoteis ----\n");
        do {
            let pergNome = prompt("Digite o nome do hotel: ").toUpperCase();
            let pergCidade = prompt("Digite o nome da cidade: ").toUpperCase();
            let pergQuartosTotais = parseInt(prompt("Digite o total dos quartos: "));
            let pergQuartosDisponiveis = parseInt(prompt("Digite o número de quartos disponiveis: "));
            let id = ++ultimoIdHotel;
            let novoHotel = { id: id, nome: pergNome, cidade: pergCidade, quartos_totais: pergQuartosTotais, quartos_disponiveis: pergQuartosDisponiveis };
            hoteis.push(novoHotel);
            console.log(hoteis);
            let pergunta = prompt("Deseja continuar? ").toLowerCase();
            if (pergunta === 'nao' || pergunta === 'não') {
                condicao = false;
            }
        } while (condicao)
    }

    function buscarHoteisPorCidade() {
        console.log("\n--- Buscando Hotel por cidade ---\n");
        let pergCidade = prompt("Digite a cidade que deseja procurar: ").toUpperCase();
        let result = [];
        for (let city of hoteis) {
            if (pergCidade === city.cidade.toUpperCase()) {
                result.push(city);
            }
        }
        if (result.length === 0) {
            console.log("Cidade não encontrada.");
        }
        console.log(result);
    }

    function buscarHotelPorId(id) {
        for (let hotel of hoteis) {
            if (hotel.id === id) {
                return hotel;
            }
        }
        return false;
    }

    function temQuartosLivres(id) {
        let hotel = buscarHotelPorId(id);
        if (hotel === false) {
            return "Hotel não existe";
        }
        if (hotel.quartos_disponiveis > 0) {
            return true;
        }
        return false;
    }

    function ocuparQuarto(id) {
        let hotel = buscarHotelPorId(id);
        if (hotel === false) {
            return "hotel não existe";
        }
        if (hotel.quartos_disponiveis > 0) {
            hotel.quartos_disponiveis--;
            return "Quarto ocupado";
        }
        return "não tem quarto disponivel";
    }

    function criarReserva(idHotel, nomeCliente) {
        if (!buscarHotelPorId(idHotel)) {
            return "Hotel não existe";
        };
        if (!temQuartosLivres(idHotel)) {
            return "hotel não tem quarto disponivel";
        };
        let id = ++ultimoIdReserva;
        function nomeDoHotel() {
            for (let hotel of hoteis) {
                if (idHotel === hotel.id) {
                    return hotel.nome;
                }
            }
        }
        reservas.push({
            idReserva: id,
            idHotel: idHotel,
            nomeHotel: nomeDoHotel(),
            nomeCliente: nomeCliente
        });
        ocuparQuarto(idHotel);
        return "Reserva Feita";
    }

    function fazerReservas() {
        console.log("\n--- Fazendo Reservas ---\n")
        let pergId = parseInt(prompt("Digite o id do hotel: "));
        let pergNomeCliente = prompt("Digite o nome do cliente: ");
        let encontrouHotel = buscarHotelPorId(pergId);
        let reservasId = 0;

        if (encontrouHotel) {
            if (temQuartosLivres(pergId) === true) {
                criarReserva(pergId, pergNomeCliente);
                for (let indiceReserva of reservas) {
                    reservasId = indiceReserva.idReserva;
                }
                console.log(`Reserva Feita com sucesso! no nome de: ${pergNomeCliente} o id da sua reserva é: ${reservasId}`);
            } else {
                console.log("Não tem quartos disponiveis");
            }
        } else {
            console.log("Erro: Hotel não encontrado");
        }
    }

    function cancelarReserva(idReserva) {
        let reservaIndice = -1; 
        reservas.forEach((reserva, indice) => {
            if (reserva.idReserva === idReserva) {
                reservaIndice = indice;
            }
        });
        if (reservaIndice === -1) {
            return "Reserva não encontrada";
        }
        reservas.splice(reservaIndice, 1);
        return "Reserva cancelada";
    }
    
    function deletarReserva() {
        console.log("\n--- Cancelando Reservas ---\n")
        let pergIdReserva = parseInt(prompt("Digite o id da Reserva que deseja cancelar: "));
        let reserva;
        for(let r of reservas){
            if(r.idReserva === pergIdReserva){
                reserva = r;
            }
        }
        if (reserva) {
            let resultado = cancelarReserva(pergIdReserva);
            if (resultado === "Reserva cancelada") {
                let hotel = buscarHotelPorId(reserva.hotelId); 
                hotel.quartos_disponiveis++;
                console.log("Reserva Cancelada!");
            } else {
                console.log("Erro ao cancelar a reserva:", resultado);
            }
        } else {
            console.log("Reserva não encontrada!");
        }
    }
    
    function listarReservas() {
        if (reservas[0] == null) {
            console.log("Não há reservas no momento.")
        } else {
            console.log(reservas);
        }
    }

    function main() {
        let condicaoExecucao = true;
        menu();
        do {
            let opcao = parseInt(prompt("******* Escolha a opção: "));
            switch (opcao) {
                case 1:
                    adicionarHotel();
                    break;
                case 2:
                    buscarHoteisPorCidade();
                    break;
                case 3:
                    fazerReservas();
                    break;
                case 4:
                    deletarReserva();
                    break;
                case 5:
                    listarReservas();
                    break
                default:
                    console.log("Opção não encontrada.");
            }
            let opcaoContinuar = prompt("Deseja Voltar ao menu? de Hoteis? (Digite apenas 'sim' ou 'nao') ").toLowerCase();
            if (opcaoContinuar === 'sim') {
                menu();
            }
            if (opcaoContinuar === 'nao') {
                condicaoExecucao = false;
            }
        } while (condicaoExecucao);
    }
    main();
}
module.exports.funcao50 = funcao50;