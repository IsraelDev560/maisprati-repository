package abstraction.exercises.eight;

/*
8. Sistema de Gestão de Funcionários: Crie um sistema que gerencie diferentes tipos de funcionários (Gerente, Desenvolvedor, Estagiario).
   Cada tipo de funcionário deve ter uma maneira diferente de calcular o salário e o bônus. Utilize uma combinação de herança, polimorfismo
   e encapsulamento para estruturar as classes. Implemente um método calcularFolhaPagamento que itera sobre todos os funcionários e calcula
   o total de salários e bônus. Adicione novas funcionalidades, como a possibilidade de promover um funcionário, o que altera seu tipo e os
   cálculos de salário e bônus.
 */

import java.util.ArrayList;
import java.util.List;

public abstract class Funcionario {
    protected String cargo;
    protected String nome;
    protected double salario;
    protected double porcentagem;

    public abstract double calcularPagamento();
    public abstract double calcularBonus();
    abstract Funcionario promoverFuncionario(double novoSalario);

    public Funcionario(String cargo, String nome, double salario, double porcentagem) {
        this.cargo = cargo;
        this.nome = nome;
        this.salario = salario;
        this.porcentagem = porcentagem;
    }

    public void exibirDetalhes() {
        System.out.println("Nome: " + nome);
        System.out.println("Salário: " + salario);
    }
}
