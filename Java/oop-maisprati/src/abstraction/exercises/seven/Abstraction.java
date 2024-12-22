package abstraction.exercises.seven;

import java.text.Normalizer;
import java.util.Locale;
import java.util.Scanner;

/*
    Esse código implementa um sistema de pagamento simplificado que permite ao usuário escolher entre três métodos de pagamento: Boleto, Pix e Cartão de Crédito.
    Dependendo da escolha, o sistema solicita informações específicas para cada forma de pagamento, processa a operação e valida o pagamento.
 */

public class Abstraction {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);
        System.out.println("Escolha uma forma de pagamento.");
        System.out.println("Boleto, Pix ou Credito.");
        String opcao = scanner.nextLine().toUpperCase();
        opcao = Normalizer.normalize(opcao, Normalizer.Form.NFD)
                .replaceAll("[^\\p{ASCII}]", "");
        switch (opcao) {
            case "BOLETO":
                System.out.println("Insira o codigo do Boleto:");
                String codigo = scanner.next();
                System.out.println("Insira o valor a pagar");
                double valorAPagar = scanner.nextDouble();
                System.out.println("Insira seu dinheiro");
                double valorPago = scanner.nextDouble();
                Boleto boleto = new Boleto(codigo, valorAPagar);
                boleto.processarPagamento(valorPago);
                boleto.validarPagamento();
                break;
            case "PIX":
                System.out.println("Insira o nome, email, ou chave aleatoria.");
                String destinatario = scanner.next();
                System.out.println("Insira o valor a pagar");
                valorAPagar = scanner.nextDouble();
                System.out.println(destinatario + " é para quem você deseja enviar?");
                System.out.println("Digite 'SIM' para confirmar, e 'NÃO' para cancelar.");
                String confirm = scanner.next().toUpperCase();
                Pix pix = new Pix(destinatario, confirm);
                pix.processarPagamento(valorAPagar);
                pix.validarPagamento();
                break;
            case "CREDITO":
                System.out.println("Digite o número de parcelas:");
                String parcelas = scanner.nextLine();
                System.out.println("Digite o número do cartão:");
                String numeroCartao = scanner.nextLine();
                System.out.println("Digite o nome do titular:");
                String titular = scanner.nextLine();
                System.out.println("Digite a data de expiração ('12/26'):");
                String data = scanner.nextLine();
                System.out.println("Digite o código atrás do cartão ('CVV'):");
                String cvv = scanner.nextLine();
                System.out.println("Digite o seu limite disponivel:");
                double limite = scanner.nextDouble();
                System.out.println("Digite o valor a pagar:");
                valorAPagar = scanner.nextDouble();
                scanner.nextLine();
                CartaoCredito cartao = new CartaoCredito(parcelas, numeroCartao, titular, data, cvv, limite, valorAPagar);
                cartao.processarPagamento(valorAPagar);
                cartao.validarPagamento();
                break;
            default:
                System.out.println("Operação invalida ou não encontrada");
        }
    }
}
