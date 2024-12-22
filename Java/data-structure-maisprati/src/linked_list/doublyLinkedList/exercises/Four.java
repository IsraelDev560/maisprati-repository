package linked_list.doublyLinkedList.exercises;

import linked_list.doublyLinkedList.Node;
/*
    4. Implemente um editor de texto simples onde as operações de desfazer (undo)
     e refazer (redo) são gerenciadas por uma lista duplamente encadeada.
*/

public class Four<T> {
    private Node<T> head;
    private Node<T> current;

    public Four(){
        this.head = null;
        this.current = null;
    }

    public boolean isEmpty(){
        return this.head == null;
    }

    public void addElement(T data){
        Node<T> newNode = new Node<>(data);
        if (isEmpty()){
            this.current = newNode;
            this.head = newNode;
            System.out.println("Adicionando... " + newNode.data);
        } else {
            Node<T> current = this.head;
            while (current.next != null){
                current = current.next;
            }
            current.next = newNode;
            newNode.previous = current;
            this.current = newNode;
            System.out.println("Adicionando... " + newNode.data);
        }
    }

    public void removeElement(int index){
        if(isEmpty()){
            throw new RuntimeException("Lista vazia.");
        }
        if(index == 0){
            Object removedData = this.head.data;
            this.head = this.head.next;
            System.out.println("Removendo... " + removedData);
            return;
        }
        Node<T> previous = null;
        Node<T> current = this.head;
        int indexCurrent = 0;
        while (current != null){
            if(index == indexCurrent){
                previous.next = current;
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

    public void undo(){
        if(isEmpty()){
            throw new RuntimeException("Lista vazia.");
        }
        if(this.current == null){
            this.current = this.head;
        }
        if(this.current.previous != null){
            System.out.println("Desfazendo... "+ this.current.data);
            this.current = this.current.previous;
        } else {
            System.out.println("Já estamos no início da lista. Não é possível desfazer mais.");
        }
    }

    public void redo(){
        if(isEmpty()){
            throw new RuntimeException("Lista vazia.");
        }
        if(this.current != null && this.current.next != null){
            this.current = this.current.next;
            System.out.println("Refazendo..." + this.current.data);
        } else{
            System.out.println("Não é possivel refazer.");
        }
    }

    public void list(){
        Node<T> list = this.head;
        while (list != null && list != this.current.next){
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
