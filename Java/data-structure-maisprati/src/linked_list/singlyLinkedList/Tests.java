package linked_list.singlyLinkedList;
/*
Lista de comandos ONE:
 - isEmpty(); - Verifica se a lista está vazia.
 - removeTask(); - Remove una tarefa pelo índice.
 - addTask(); - Adiciona uma tarefa, do tipo String.
 - listTasks(); - Exibe a lista de tarefas.
 - taskCompleted(2); - Marcar uma tarefa como concluída pelo índice.
*/

/*
Lista de comandos TWO:
 - isEmpty(); - Verifica se a lista está vazia.
 - removeUrl(); - Remove uma Url pelo índice.
 - addUrl(); - Adiciona uma Url, do tipo String.
 - listUrl(); - Exibe a lista de Url.
*/

/*
Lista de comandos THREE:
 - isEmpty(); - Verifica se a lista está vazia.
 - removeText(); - Remove o Texto pelo índice.
 - addText(); - Adiciona o texto, do tipo String.
 - listTexts(); - Exibe a lista de textos.
 - undo(); - Desfaz a ultima ação(ou seja exclui o ultimo texto colocado)
*/


import linked_list.singlyLinkedList.exercises.Three;
import linked_list.singlyLinkedList.exercises.Two;

public class Tests {
    public static void main(String[] args) {
//        One one = new One();
//        one.addTask("Task 1");
//        one.addTask("Task 2");
//        one.addTask("Task 3");
//        one.addTask("Task 4");
//        one.listTasks();
//        one.taskCompleted(2);
//        one.listTasks();

        Two two = new Two();
        two.addUrl("1");
        two.addUrl("2");
        two.addUrl("3");
        two.addUrl("4");
        two.listUrl();
        two.removeUrl(2);
        two.listUrl();
        two.addUrl("5");
        two.listUrl();

//        Three three = new Three();
//        three.addText("Texto 1");
//        three.addText("Texto 12");
//        three.addText("Texto 423");
//        three.undo();
//        three.listTexts();
//        three.removeText(0);
//        three.listTexts();
    }
}
