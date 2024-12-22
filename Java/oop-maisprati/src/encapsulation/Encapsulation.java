package encapsulation;

import encapsulation.exercises.Produto;
/*
 A Classe Produtos, representa uma classe de produtos, permitindo adição de nome, preço e quantidade.
 Os preços e quantidade não podem ser nulos, para inicar os metodos deve-se instanciar diretamente, ou usar os Setters.
 a função aplicar desconto aplica descontos até 50%.
*/

public class Encapsulation {
    public static void main(String[] args) {
        Produto produto = new Produto();
        produto.setNome("Produto A");
        produto.setPreco(125.80);
        produto.setQuantidade(3);
        System.out.println(produto.getNome());
        System.out.println(produto.getPreco());
        System.out.println(produto.getQuantidade());
        produto.aplicarDesconto(50);
    }
}
