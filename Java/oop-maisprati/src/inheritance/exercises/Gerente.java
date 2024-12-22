package inheritance.exercises;

public class Gerente extends Funcionario{
    public Gerente(String cargo,String nome, double salario, double porcentagem) {
        super(cargo, nome, salario, porcentagem);
    }
    @Override
    public void trabalhar(){
        System.out.println(nome + " Está iniciando o trabalho como " + cargo);
    }
}
