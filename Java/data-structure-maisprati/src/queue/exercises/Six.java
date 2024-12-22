package queue.exercises;

import queue.Node;

/*
    6. Crie um simulador de fila de atendimento em um banco. Utilize uma fila para gerenciar os clientes que aguardam
    atendimento e implemente a lógica para chamar o próximo cliente.
*/

public class Six {
    private Node first;
    private Node last;

    public Six(){
        this.first = null;
        this.last = null;
    }

    public boolean isEmpty(){
        return this.first == null;
    }

    public void add(String data){
        Node newNode = new Node(data);
        if(isEmpty()){
            this.first = newNode;
            this.last = newNode;
            System.out.println(newNode.data + " Está Entrando na fila");
        } else{
           this.last.next = newNode;
           this.last = newNode;
            System.out.println(newNode.data + " Está Entrando na fila");
        }
    }

    public void callNext(){
        if(isEmpty()){
            throw new RuntimeException("Lista vazia");
        }

        String data = (String) this.first.data;
        this.first = this.first.next;
        System.out.println(data + " Está Saindo da fila");
        if(this.first == null){
            this.last = null;
        }
    }

    public void list(){
        Node list = this.first;
        while (list != null){
            System.out.print(list.data);
            if (list.next == null){
                System.out.println();
            } else {
                System.out.print(" -> ");
            }
        list = list.next;
        }
    }
}
