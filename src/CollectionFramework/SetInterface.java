package CollectionFramework;

import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class SetInterface {
    static void main(String[] args) {
        int count[] = {34,22,10,60,30,22};
        Set<Integer> set = new HashSet<>();

        try{
            for(int i =0; i<5; i++){
                set.add(count[i]);
            }
            System.out.println(set);
        }catch (Exception e){}

        TreeSet<Integer> ss = new TreeSet<>(set);
        System.out.println("Sorted list is: ");
        System.out.println(ss);

        System.out.println("first element: " + ss.first());

        System.out.println("last element: " + ss.last());
    }
}
