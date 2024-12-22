package abstraction.exercises.seven;

import java.util.Objects;

public class Pix extends FormaPagamento{
    private String destinatario;
    private String confirm;
    private double valorPago;

    public Pix(String destinatario, String confirm){
        this.destinatario = destinatario;
        this.confirm =  confirm;
    }

    @Override
    public void processarPagamento(double valor) {
        if (valor <= 0){
            throw new IllegalArgumentException("Número negativo, ou nulo.");
        }
        valorPago = valor;
        System.out.println("PROCESSANDO.....");
    }

    @Override
    public void validarPagamento() {
        if(Objects.equals(confirm, "NÃO") || Objects.equals(confirm, "NAO")){
            System.out.println("Operação cancelada.");
            return;
        }
        System.out.println("Enviando PIX para: {"+ destinatario + "} Valor do Pix: "+ valorPago);
        System.out.println("EFETUANDO PAGAMENTO....");
        System.out.println("Pagamento via Pix realizado!");
    }
}
