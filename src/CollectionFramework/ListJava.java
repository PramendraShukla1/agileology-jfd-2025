package CollectionFramework;

import java.util.ArrayList;
import java.util.List;

public class ListJava {
    static void main(String[] args) {
        List<Integer> l1 = new ArrayList<Integer>();
        List<Integer> l2 = new ArrayList<Integer>();


        l1.add(0, 10);
        l1.add(1, 20);

        System.out.println("list 1 : " + l1);

        l2.add(10);
        l2.add(20);
        l2.add(30);

        System.out.println("list 2 : " + l2);

        l1.addAll(1, l2);

        System.out.println("list 1 : " + l1);

        l1.remove(1);
        System.out.println("list1 after remove : " + l1);

        System.out.println("list1 using get() : " + l1.get(2));

        l1.set(0, 60);
        System.out.println("list 1 : " + l1);






    }
}
