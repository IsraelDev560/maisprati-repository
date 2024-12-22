package inheritance.exercises;

/*
 3. Criação de uma Hierarquia de Classes: Crie uma classe Funcionario com atributos nome e salario.
 Em seguida, crie duas subclasses: Gerente e Desenvolvedor. Adicione um método calcularBonus que retorna
 um valor diferente para cada tipo de funcionário (por exemplo, 20% do salário para Gerente e 10% para Desenvolvedor).
 Utilize protected para permitir que as subclasses acessem os atributos da classe base de forma segura.

 4. Sobrescrita de Métodos: Na classe Funcionario, crie um método trabalhar(), que imprime uma mensagem genérica sobre o trabalho realizado.
 Nas subclasses Gerente e Desenvolvedor, sobrescreva esse método para especificar o tipo de trabalho realizado por cada um.
 Utilize a anotação @override e explore como ela ajuda a garantir que a sobrescrita foi feita corretamente.
*/

public abstract class Funcionario {
    protected String cargo;
    protected String nome;
    protected double salario;
    protected double porcentagem;

    public Funcionario(String cargo,String nome, double salario, double porcentagem){
        this.cargo = cargo;
        this.nome = nome;
        this.salario = salario;
        this.porcentagem = porcentagem;
    }

    public void calcularBonus(){
        double bonus = salario *  (porcentagem / 100);
        double salarioFinal = salario + bonus;
        System.out.println("Bonus do salário do "+ cargo);
        System.out.println(porcentagem + " % de bonus. Preço final: " + salarioFinal);
    }

    public void exibirDetalhes(){
        System.out.println("Nome: "+ nome);
        System.out.println("Salário: "+ salario);
    }

    public void trabalhar(){
        System.out.println(nome + " Está iniciando o trabalho...");
    }
}
