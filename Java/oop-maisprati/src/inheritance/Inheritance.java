package inheritance;

import inheritance.exercises.Desenvolvedor;
import inheritance.exercises.Gerente;

/*
 A classe Funcionario representa funcionarios de uma empresa ou local ficticio.
 As subclasses Desenvolvedor e Gerente possuem a função trabalhar() especificas para cada um.
*/

public class Inheritance {
    public static void main(String[] args) {
        Desenvolvedor desenvolvedor = new Desenvolvedor("Desenvolvedor" ,"Israel", 1200.5, 10.0);
        desenvolvedor.exibirDetalhes();
        desenvolvedor.calcularBonus();
        desenvolvedor.trabalhar();
        System.out.println("-----------------");
        Gerente gerente = new Gerente("Gerente", "Jaques", 3000.0, 20.0);
        gerente.exibirDetalhes();
        gerente.calcularBonus();
        gerente.trabalhar();
    }
}
