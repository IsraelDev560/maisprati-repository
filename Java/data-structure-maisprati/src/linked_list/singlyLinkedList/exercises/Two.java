package linked_list.singlyLinkedList.exercises;

/*
2. Crie uma aplicação que simule o histórico de navegação de um navegador
   utilizando uma lista simplesmente encadeada. Implemente funcionalidades
   para adicionar novas URLs e remover URLs antigas quando a lista atingir
   um certo tamanho.
 */

import linked_list.singlyLinkedList.Node;

import java.util.ArrayList;
import java.util.List;

public class Two {
    private Node head;
    private final int quantidadeMaxima = 3;
    private int quantidade;

    public Two(){
        this.head = null;
        this.quantidade = 0;
    }

    public boolean isEmpty(){
        return this.head == null;
    }

    public void addUrl(String data){
        Node newNode = new Node(data);
        if(isEmpty()){
            this.head = newNode;
            System.out.println("Adicionando URL: " +newNode.data);
            this.quantidade = 1;
        } else{
            if(quantidade == quantidadeMaxima){
                System.out.println("Quantidade maxima alcançada, removendo a primeira URL: "+ this.head.data);
                this.head = this.head.next;
                quantidade--;
            }
            Node current = this.head;
            while (current.next != null){
                current = current.next;
            }
            current.next = newNode;
            System.out.println("Adicionando URL: " +newNode.data);
            quantidade++;
        }
    }

    public void removeUrl(int index){
        if (isEmpty()){
            this.quantidade = 0;
            throw new RuntimeException("Lista vazia");
        }

        if (index < 0) {
            throw new IllegalArgumentException("Índice inválido.");
        }

        if(index == 0){
            Object removed = this.head;
            this.head = this.head.next;
            System.out.println("Removendo: " + removed);
            return;
        }
        Node previous = null;
        Node current = this.head;
        int indexCurrent = 0;
        while (current != null){
            if(indexCurrent == index){
                previous.next = current.next;
                System.out.println("Removendo URL: " + current.data);
                break;
            }
            indexCurrent++;
            previous = current;
            current = current.next;
            quantidade--;
        }
        if(current == null){
            throw new RuntimeException("Index out of bounds");
        }
    }

    public void listUrl(){
        List<Node> list = new ArrayList<>();
        if(isEmpty()){
            throw new RuntimeException("Lista Vazia");
        } else {
            Node current = this.head;
            while (current != null){
                list.add(current);
                current = current.next;
            }
            for (Node item : list){
                System.out.print("URL: " + item.data);
                if (item.next == null){
                    System.out.println();
                } else{
                    System.out.print(" -> ");
                }
            }
        }
    }

}
