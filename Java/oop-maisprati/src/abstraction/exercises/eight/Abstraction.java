package abstraction.exercises.eight;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/*
    Esse código implementa um sistema de gestão de funcionários com diferentes cargos (Desenvolvedor, Estagiário e Gerente), cada um com regras específicas para o cálculo de salário e bônus.
    O sistema também permite promover um funcionário, alterando seu cargo e, consequentemente, os cálculos de pagamento e bônus.
*/

public class Abstraction {
    public static void main(String[] args) {
        ArrayList<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(new Desenvolvedor("Dev", "Israel", 800, 5));
        funcionarios.add(new Estagiario("Estagiario", "Juca", 600, 3));
        funcionarios.add(new Gerente("Gerente", "Jaques", 15550, 10));
        funcionarios.set(0, funcionarios.get(0).promoverFuncionario(4000));
        for (Funcionario funcionario: funcionarios){
            funcionario.exibirDetalhes();
        }
        System.out.println("------------------");
        Map<String, Double> resultado1 = calcularTotalDeSalarios(funcionarios);
        System.out.println("Salario total dos funcionarios: " + resultado1.get("Total"));
        Map<String, Double> resultado = calcularTotalDeBonus(funcionarios);
        System.out.println("Bonus total: " + resultado.get("Bonus") + "%");
        System.out.println("Total: " + resultado.get("Total"));


    }
    public static Map<String, Double> calcularTotalDeSalarios(ArrayList<Funcionario> funcionarios){
        double total = 0;
        for (Funcionario funcionario : funcionarios){

            total += funcionario.calcularPagamento();
        }
        Map<String, Double> resultado = new HashMap<>();
        resultado.put("Total", total);
        return resultado;
    }
    public static Map<String, Double> calcularTotalDeBonus(ArrayList<Funcionario> funcionarios){
        double total = 0;
        double bonus = 0;
        for (Funcionario funcionario : funcionarios){
            bonus += funcionario.porcentagem;
            total += funcionario.calcularBonus();
        }
        Map<String, Double> resultado = new HashMap<>();
        resultado.put("Bonus", bonus);
        resultado.put("Total", total);
        return resultado;
    }
}
