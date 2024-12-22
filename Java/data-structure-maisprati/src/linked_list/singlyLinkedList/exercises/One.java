package linked_list.singlyLinkedList.exercises;

/*
1. Implemente um gerenciador de tarefas onde cada tarefa é um nó em uma lista simplesmente encadeada.
   Permita que o usuário adicione, remova, e marque tarefas como concluídas.
*/

import linked_list.singlyLinkedList.Node;

import java.util.ArrayList;
import java.util.List;

public class One {
    private Node head;

    public One(){
        this.head = null;
    }

    public void addTask(String data){
       Node newNode = new Node(data);
       if(isEmpty()){
           this.head = newNode;
           System.out.println("Adicionando... " + newNode.data);
       } else {
           Node current = this.head;
           while (current.next != null){
               current = current.next;
           }
           current.next = newNode;
           System.out.println("Adicionando... " + newNode.data);
       }
    }

    public void removeTask(int index){
        if (isEmpty()){
            throw new RuntimeException("Lista vazia.");
        }

        if (index < 0) {
            throw new IllegalArgumentException("Índice inválido.");
        }

        if(index == 0){
            Object removedData = this.head.data;
            this.head = this.head.next;
            System.out.println("Removendo... " + removedData);
            return;
        }
        Node previous = null;
        Node current = this.head;
        int indexCurrent = 0;
        while (current != null){
            if(indexCurrent == index){
                previous.next = current.next;
                System.out.println("Removendo... " + current.data);
                break;
            }
            indexCurrent++;
            previous = current;
            current = current.next;
        }
        if(current == null){
            throw new RuntimeException("Index out of bounds");
        }
    }

    public void taskCompleted(int index){
        if(isEmpty()){
            throw new RuntimeException("Lista vazia.");
        }
        if(index == 0){
            Object removedData = this.head.data;
            this.head = this.head.next;
            System.out.println("Concluindo... " + removedData);
            return;
        }
        Node previous = null;
        Node current = this.head;
        int indexCurrent = 0;
        while (current != null){
            if(indexCurrent == index){
                previous.next = current.next;
                System.out.println("Concluindo... "+ current.data);
                break;
            }
            indexCurrent++;
            previous = current;
            current = current.next;
        }
        if(current == null){
            throw new RuntimeException("Index out of bounds");
        }
    }

    public void listTasks() {
      List<Node> list = new ArrayList<>();
      if(isEmpty()){
          System.out.println("Lista vazia.");
          return;
      } else {
          Node current = this.head;
          while (current != null){
              list.add(current);
              current = current.next;
          }
          for (Node item : list){
              System.out.print("TaskList: " + item.data);
              if(item.next == null){
                  System.out.println();
              } else {
                  System.out.print(" -> ");
              }
          }
      }
    }
    public boolean isEmpty(){
        return this.head == null;
    }

}
