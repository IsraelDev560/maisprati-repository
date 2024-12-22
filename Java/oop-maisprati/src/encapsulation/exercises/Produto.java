package encapsulation.exercises;

/*
1. Criação de uma Classe Simples: Crie uma classe Produto que represente um produto de uma loja.
 A classe deve ter atributos privados nome, preco e quantidade em estoque. Implemente métodos públicos
  para acessar e modificar esses atributos. Garanta que o preço e a quantidade não possam ser negativos.

  2. Melhorando a Classe com Validação: Extenda a classe Produto para incluir um método aplicarDesconto(double porcentagem)
     que reduz o preço do produto. Valide para garantir que o desconto não possa ser maior que 50%. Implemente a lógica que
     lança uma exceção se o desconto for inválido.
 */

public class Produto {
    private String nome;
    private double preco;
    private int quantidade;
    private double porcentagem;


    public Produto(){}

    public Produto(String nome, double preco, int quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public void aplicarDesconto(double porcentagem){
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("Desconto inválido! O desconto deve estar entre 0% e 50%.");
        }
        double desconto = getPreco() * (porcentagem / 100);
        double precoFinal = getPreco() - desconto;

        System.out.println(porcentagem + " % de desconto aplicado. Preco final: " + precoFinal);
    }

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        if(preco >= 0){
        this.preco = preco;
        } else {
            throw new IllegalArgumentException("O preço não pode ser negativo.");
        }
    }

    public int getQuantidade(){
        return quantidade;
    }

    public void setQuantidade(int quantidade){
        if(quantidade >=0){
        this.quantidade = quantidade;
        } else {
            throw new IllegalArgumentException("A quantidade não pode ser negativa.");
        }
    }
}
