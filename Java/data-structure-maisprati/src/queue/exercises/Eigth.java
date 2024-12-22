package queue.exercises;

/*
8. Implemente uma fila que simula a fila de processos prontos para execução em um sistema operacional.
 Permita que novos processos sejam adicionados e que o processo mais antigo seja removido para execução.
 */

import queue.Node;

public class Eigth {
    private Node first;
    private Node last;
    private final int limit = 3;
    private int quantity;


    public Eigth(){
        this.first = null;
        this.last = null;
        this.quantity = 0;
    }

    public boolean isEmpty(){
        return this.first == null;
    }

    public void add(String data){
        Node newNode = new Node(data);
        if (isEmpty()){
            this.first = newNode;
            this.last = newNode;
            System.out.println(newNode.data + " Adicionado, pronto para executar.");
            this.quantity = 1;
        } else {
            if (quantity == limit){
                System.out.println("Quantidade maxima alcançada, removendo: "+ this.first.data);
                this.first = this.first.next;
                quantity--;
            }
            this.last.next = newNode;
            this.last = newNode;
            System.out.println(newNode.data + " Adicionado, pronto para executar.");
            quantity++;
        }
    }

    public void remove(){
        if (isEmpty()){
            throw new RuntimeException("Lista vazia.");
        }
        String data = (String) this.first.data;
        this.first = this.first.next;
        System.out.println(data+ " Está Saindo da fila de impressão");
        quantity--;
        if (this.first == null){
            this.last = null;
        }
    }

    public void list(){
        Node list = this.first;
        while (list != null){
            System.out.print(list.data);
            if(list.next == null){
                System.out.println();
            } else {
                System.out.print(" -> ");
            }
            list = list.next;
        }
    }
}
