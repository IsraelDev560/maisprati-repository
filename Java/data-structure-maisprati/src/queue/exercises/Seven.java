package queue.exercises;
/*
7. Implemente um sistema de gerenciamento de impressões onde os trabalhos de impressão são enfileirados
 e processados na ordem em que chegam. Use uma fila para armazenar os trabalhos de impressão.
 */

import queue.Node;

public class Seven {
    private Node first;
    private Node last;

    public Seven(){
        this.first = null;
        this.last = null;
    }

    public boolean isEmpty(){
        return this.first == null;
    }

    public void add(String data){
       Node newNode = new Node(data);
       if (isEmpty()){
           this.first = newNode;
           this.last = newNode;
           System.out.println(newNode.data+" Adicionado na fila de impressão");
       } else {
           this.last.next = newNode;
           this.last = newNode;
           System.out.println(newNode.data+" Adicionado na fila de impressão");
       }
    }

    public void remove(){
        if(isEmpty()){
            throw new RuntimeException("Lista vazia");
        }

        String data = (String) this.first.data;
        this.first = this.first.next;
        System.out.println(data+ " Está Saindo da fila de impressão");
        if (this.first == null){
            this.last = null;
        }
    }

    public void list(){
        Node list = this.first;
        while (list != null){
            System.out.print(list.data);
            if (list.next == null){
                System.out.println();
            }else {
                System.out.print(" -> ");
            }
            list = list.next;
        }
    }
}
