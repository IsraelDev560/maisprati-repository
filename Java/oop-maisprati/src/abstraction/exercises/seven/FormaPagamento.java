package abstraction.exercises.seven;
/*
7. Abstração em um Sistema de Pagamentos: Crie uma classe abstrata FormaPagamento com métodos abstratos processarPagamento(double valor)
 e validarPagamento(). Crie classes concretas CartaoCredito, Boleto e Pix que herdam de FormaPagamento e implementam os métodos abstratos.
  Adicione lógica de validação específica para cada forma de pagamento e simule um sistema que utilize diferentes formas de pagamento.
 */
public abstract class FormaPagamento {
    public abstract void processarPagamento(double valor);
    public abstract void validarPagamento();
}
