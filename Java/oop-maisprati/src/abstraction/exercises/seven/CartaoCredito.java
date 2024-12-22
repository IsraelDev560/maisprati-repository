package abstraction.exercises.seven;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CartaoCredito extends FormaPagamento{
    private String parcelas;
    private String numeroCartao;
    private String titular;
    private String data;
    private String cvv;
    private double valorAPagar;
    private double limite;

    public CartaoCredito(String parcelas, String numeroCartao, String titular, String data, String cvv, double limite, double valorAPagar){
        this.parcelas = parcelas;
        this.numeroCartao = numeroCartao;
        this.titular = titular;
        this.data = data;
        this.cvv = cvv;
        this.limite = limite;
        this.valorAPagar = valorAPagar;
    }

    @Override
    public void processarPagamento(double valor) {
        if (valor <= 0){
            throw new IllegalArgumentException("Número negativo, ou nulo.");
        }
        System.out.println("PROCESSANDO.....");
    }

    public boolean validarCVV() {
        return cvv != null && cvv.matches("\\d+") && (cvv.length() == 3 || cvv.length() == 4);
    }

    public boolean validarData() {
        SimpleDateFormat formatoData = new SimpleDateFormat("MM/yy");
        formatoData.setLenient(false);
        try {
            Date dataValidade = formatoData.parse(data);
            return dataValidade.after(new Date());
        } catch (ParseException e) {
            System.out.println("Formato de data inválido. Por favor, insira no formato MM/yy.");
            return false;
        }
    }

        @Override
    public void validarPagamento() {
        if(numeroCartao.length() == 16) {

            if (!validarCVV()){
                System.out.println("CVV inválido.");
                return;
            }

            if (!validarData()){
                System.out.println("Cartão expirado.");
                return;
            }
            if (limite >= valorAPagar){
                double restante = limite - valorAPagar;
                limite = restante;
                System.out.println("EFETUANDO PAGAMENTO....");
                System.out.printf("Saldo restante: %.2f%n", restante);
                System.out.println("Pagamento via Cartão de crédito realizado!");
            }
            else {
                System.out.println("Desculpe, mas seu saldo é insuficiente para realizar essa operação.");
                return;
            }
            System.out.printf("Parcelas: %s, Nº do cartão: %s, Titular: %s%n", parcelas, numeroCartao, titular);
        } else{
            System.out.println("Cartão invalido");
        }
    }
}
