package abstraction.exercises.eight;

public class Estagiario extends Funcionario{
    public Estagiario(String cargo,String nome,double salario, double porcentagem){
        super(cargo, nome , salario, porcentagem);
    }

    @Override
    public double calcularPagamento() {
        return this.salario;
    }

    @Override
    public double calcularBonus() {
        return salario + (salario * (porcentagem / 100));
    }

    @Override
    public Funcionario promoverFuncionario(double novoSalario) {
        return new Desenvolvedor(cargo, nome, novoSalario, porcentagem);
    }
}
