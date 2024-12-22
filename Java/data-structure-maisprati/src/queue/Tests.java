package queue;

import queue.exercises.Eigth;
import queue.exercises.Seven;
import queue.exercises.Six;
/*
Lista de comandos Six:
   Está lista só aceita do tipo String.
 - isEmpty(); - Verifica se a fila está vazia.
 - enqueue(); - Adiciona uma pessoa na fila.
 - dequeue(); - Chama(retira) uma pessoa na fila.
 - list(); - Exibe quem está na fila.
*/

public class Tests {
    public static void main(String[] args) {
//        Six six = new Six();
//        six.add("Carlos");
//        six.add("Cabrito");
//        six.add("Carlao");
//        six.list();
//        six.callNext();
//        six.list();

//        Seven seven = new Seven();
//        seven.add("Papel 1");
//        seven.add("Papel 2");
//        seven.add("Papel 3");
//        seven.list();
//        seven.remove();
//        seven.list();

        Eigth eigth = new Eigth();
        eigth.add("Process 1");
        eigth.add("Process 2");
        eigth.add("Process 3");
        eigth.add("Process 4");
        eigth.list();
        eigth.remove();
        eigth.remove();
        eigth.add("Process 5");
        eigth.list();
    }
}
