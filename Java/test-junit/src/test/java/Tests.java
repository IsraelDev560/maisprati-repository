import org.example.Calculadora;
import org.example.GerenciarDeTarefas;
import org.example.Tarefa;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;


public class Tests {
    @Test
    public void testSomar(){
        Calculadora calculadora = new Calculadora();
        int resultado = calculadora.somar(2, 3);
        assertEquals(5, resultado, "a soma deve ser 5");
    }

    @Test
    public void testSomarNegativo(){
        Calculadora calculadora = new Calculadora();
        int resultado = calculadora.somar(-1,-1);
        assertEquals(-2, resultado, "A soma deve ser -2");
    }

   private GerenciarDeTarefas gerenciarDeTarefas;
    @BeforeEach
    public void setup(){
        gerenciarDeTarefas = new GerenciarDeTarefas();
    }

    @Test
    public void testAdicionarTarefa(){
        Tarefa tarefa = new Tarefa("Estudar java");
        gerenciarDeTarefas.adicionarTarefa(tarefa);

        assertNotNull(gerenciarDeTarefas.buscarTarefa("Estudar java"));
    }

    @Test
    public void testRemoverTarefa(){
        Tarefa tarefa = new Tarefa("Estudar Python");
        gerenciarDeTarefas.adicionarTarefa(tarefa);
        gerenciarDeTarefas.removerTarefa(tarefa);

        assertNull(gerenciarDeTarefas.buscarTarefa("Estudar Python"));
    }

    @Test
    public void testBuscarTarefaExistente(){
        Tarefa tarefa = new Tarefa("Estudar PHP");
        gerenciarDeTarefas.adicionarTarefa(tarefa);

        Tarefa resultado = gerenciarDeTarefas.buscarTarefa("Estudar PHP");

        assertNotNull(resultado);
        assertEquals("Estudar PHP", resultado.getTitulo());
    }
    @Test
    public void testListarTarefasConcluidas(){
        Tarefa tarefa = new Tarefa("Correr de paraquedas");
        tarefa.marcarComoConcluida();
        gerenciarDeTarefas.adicionarTarefa(tarefa);
        var tarefas = gerenciarDeTarefas.listarTarefasConcluidas();
    }
}
