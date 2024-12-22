package abstraction.exercises.eight;

public class Gerente extends Funcionario {
    public Gerente(String cargo, String nome, double salario, double porcentagem) {
        super(cargo, nome, salario, porcentagem);
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
        this.salario = novoSalario;
        return null;
    }
}
