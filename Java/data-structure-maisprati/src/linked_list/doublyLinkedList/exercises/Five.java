package linked_list.doublyLinkedList.exercises;

import linked_list.doublyLinkedList.Node;

/*
5. Implemente um jogo simples de cartas onde a mão do jogador é representada
   por uma lista duplamente encadeada. Permita que o jogador adicione, remova,
   e reorganize as cartas na mão.
*/

public class Five<T> {
    private Node<T> head;

    public Five(){
        this.head = null;
    }

    public boolean isEmpty(){
        return this.head == null;
    }

    public void addElement(T data){
        Node<T> newNode = new Node<>(data);
        if(isEmpty()){
            this.head = newNode;
            System.out.println("Adicionando... " + newNode.data);
        } else {
            Node<T> lastNode = this.head;
            while (lastNode.next != null){
                lastNode = lastNode.next;
            }
            lastNode.next = newNode;
            newNode.previous = lastNode;
            System.out.println("Adicionando... "+ newNode.data);
        }
    }

    public void removeElement(int index){
        if (isEmpty()){
            throw new RuntimeException("Lista vazia");
        }
        if (index < 0) {
            throw new IllegalArgumentException("Índice inválido.");
        }
        if(index == 0){
            Object removedData = this.head.data;
            this.head = this.head.next;
            System.out.println("Removendo..."+removedData );
            return;
        }
        Node<T> current = this.head;
        Node<T> previous = null;
        int indexCurrent = 0;
        while (current != null){
            if(index == indexCurrent){
                previous.next = current;
                System.out.println("Removendo..."+ current.data);
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

    public void reorganize(){
        if (isEmpty()){
            throw new RuntimeException("Lista vazia.");
        }
        Node<T> current = this.head;
        while (current != null && current.next != null){
            Node<T> nextNode = current.next;
            T temp = current.data;
            current.data = nextNode.data;
            nextNode.data = temp;
            current = nextNode.next;
        }
    }

    public void list(){
        Node<T> list = this.head;
        while (list != null ){
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
