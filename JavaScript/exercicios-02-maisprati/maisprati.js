/*
 Para executar estas funções, rode o programa e selecione entre as opções de 1 a 50.
 Para sair da funcão digite 'nao', e o programa vai parar.
*/
const prompt = require('prompt-sync')();
function menu() {
    console.log(`--- Menu --- \nOs exericios vão do 1 ao 50.`)
}
menu();
main();
function main() {
    let condicaoExecucao = true;
    do {
        let opcao = parseInt(prompt("******* Escolha a opção: "))
        switch (opcao) {
            case 1:
                const modulo01 = require('./Atividades/01');
                modulo01.funcao01();
                break;
            case 2:
                const modulo02 = require('./Atividades/02');
                modulo02.funcao02();
                break;
            case 3:
                const modulo03 = require('./Atividades/03');
                modulo03.funcao03();
                break;
            case 4:
                const modulo04 = require('./Atividades/04');
                modulo04.funcao04();
                break;
            case 5:
                const modulo05 = require('./Atividades/05');
                modulo05.funcao05();
                break;
            case 6:
                const modulo06 = require('./Atividades/06');
                modulo06.funcao06();
                break;
            case 7:
                const modulo07 = require('./Atividades/07');
                modulo07.funcao07();
                break;
            case 8:
                const modulo08 = require('./Atividades/08');
                modulo08.funcao08();
                break;
            case 9:
                const modulo09 = require('./Atividades/09');
                modulo09.funcao09();
                break;
            case 10:
                const modulo10 = require('./Atividades/10');
                modulo10.funcao10();
                break;
            case 11:
                const modulo11 = require('./Atividades/11');
                modulo11.funcao11();
                break;
            case 12:
                const modulo12 = require('./Atividades/12');
                modulo12.funcao12();
                break;
            case 13:
                const modulo13 = require('./Atividades/13');
                modulo13.funcao13();
                break;
            case 14:
                const modulo14 = require('./Atividades/14');
                modulo14.funcao14();
                break;
            case 15:
                const modulo15 = require('./Atividades/15');
                modulo15.funcao15();
                break;
            case 16:
                const modulo16 = require('./Atividades/16');
                modulo16.funcao16();
                break;
            case 17:
                const modulo17 = require('./Atividades/17');
                modulo17.funcao17();
                break;
            case 18:
                const modulo18 = require('./Atividades/18');
                modulo18.funcao18();
                break;
            case 19:
                const modulo19 = require('./Atividades/19');
                modulo19.funcao19();
                break;
            case 20:
                const modulo20 = require('./Atividades/20');
                modulo20.funcao20();
                break;
            case 21:
                const modulo21 = require('./Atividades/21');
                modulo21.funcao21();
                break;
            case 22:
                const modulo22 = require('./Atividades/22');
                modulo22.funcao22();
                break;
            case 23:
                const modulo23 = require('./Atividades/23');
                modulo23.funcao23();
                break;
            case 24:
                const modulo24 = require('./Atividades/24');
                modulo24.funcao24();
                break;
            case 25:
                const modulo25 = require('./Atividades/25');
                modulo25.funcao25();
                break;
            case 26:
                const modulo26 = require('./Atividades/26');
                modulo26.funcao26();
                break;
            case 27:
                const modulo27 = require('./Atividades/27');
                modulo27.funcao27();
                break;
            case 28:
                const modulo28 = require('./Atividades/28');
                modulo28.funcao28();
                break;
            case 29:
                const modulo29 = require('./Atividades/29');
                modulo29.funcao29();
                break;
            case 30:
                const modulo30 = require('./Atividades/30');
                modulo30.funcao30();
                break;
            case 31:
                const modulo31 = require('./Atividades/31');
                modulo31.funcao31();
                break;
            case 32:
                const modulo32 = require('./Atividades/32');
                modulo32.funcao32();
                break;
            case 33:
                const modulo33 = require('./Atividades/33');
                modulo33.funcao33();
                break;
            case 34:
                const modulo34 = require('./Atividades/34');
                modulo34.funcao34();
                break;
            case 35:
                const modulo35 = require('./Atividades/35');
                modulo35.funcao35();
                break;
            case 36:
                const modulo36 = require('./Atividades/36');
                modulo36.funcao36();
                break;
            case 37:
                const modulo37 = require('./Atividades/37');
                modulo37.funcao37();
                break;
            case 38:
                const modulo38 = require('./Atividades/38');
                modulo38.funcao38();
                break;
            case 39:
                const modulo39 = require('./Atividades/39');
                modulo39.funcao39();
                break;
            case 40:
                const modulo40 = require('./Atividades/40');
                modulo40.funcao40();
                break;
            case 41:
                const modulo41 = require('./Atividades/41');
                modulo41.funcao41();
                break;
            case 42:
                const modulo42 = require('./Atividades/42');
                modulo42.funcao42();
                break;
            case 43:
                const modulo43 = require('./Atividades/43');
                modulo43.funcao43();
                break;
            case 44:
                const modulo44 = require('./Atividades/44');
                modulo44.funcao44();
                break;
            case 45:
                const modulo45 = require('./Atividades/45');
                modulo45.funcao45();
                break;
            case 46:
                const modulo46 = require('./Atividades/46');
                modulo46.funcao46();
                break;
            case 47:
                const modulo47 = require('./Atividades/47');
                modulo47.funcao47();
                break;
            case 48:
                const modulo48 = require('./Atividades/48');
                modulo48.funcao48();
                break;
            case 49:
                const modulo49 = require('./Atividades/49');
                modulo49.funcao49();
                break;
            case 50:
                const modulo50 = require('./Atividades/50');
                modulo50.funcao50();
                break;
            default:
                console.log("operação invalida!");
        }
        opcao = prompt("Deseja continuar com o Menu ? (Digite apenas 'sim' ou 'nao') ").toLowerCase();
        if (opcao === 'nao') {
            condicaoExecucao = false;
        }
    } while (condicaoExecucao)
}