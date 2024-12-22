package linked_list.doublyLinkedList;

public class Node<T> { ;
    public T data;
    public Node<T> next, previous;

    public Node(T data){
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}
