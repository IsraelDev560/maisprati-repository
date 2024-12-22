package abstraction.exercises.seven;

public class Boleto extends FormaPagamento{

    private String codigo;
    private double valorAPagar;
    private double valorPago;

    public Boleto(String codigo, double valorAPagar){
        this.codigo = codigo;
        this.valorAPagar = valorAPagar;
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
        if (valorPago > valorAPagar){
            System.out.println("Você pagou "+ (valorAPagar - valorPago) + " a mais");
            return;
        }
        if (valorPago < valorAPagar){
            System.out.println("Desculpe, mas seu saldo é insuficiente para realizar essa operação.");
            System.out.println("Saldo insuficiente.");
            return;
        }
        System.out.println("COD: {"+ codigo + "} Valor do boleto: "+ valorAPagar);
        System.out.println("EFETUANDO PAGAMENTO....");
        System.out.println("Pagamento via Boleto realizado!");
    }
}
