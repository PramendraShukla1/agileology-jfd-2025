package CollectionFramework;

import java.util.LinkedList;
import java.util.Queue;

public class QueueInterface {
    static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.add(6);
        q.add(3);
        q.add(7);
        q.add(9);
        q.add(1);
        q.add(2);
        q.add(4);
        System.out.println("The Queue is: "+ q);
        int num = q.remove();
        System.out.println("removed num from q: " + num);
        System.out.println("The Queue after removing: "+ q);

        int head = q.peek();
        System.out.println("Head of the queue is : "+ head);

        int size  = q.size();

        System.out.println(size);

    }
}
