package CollectionFramework;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class MapInterface {
    static void main(String[] args) {
        Map<String, String> m1 = new HashMap<>();
        Map<String, String> t1 = new TreeMap<>();

        m1.put("Zara", "8");
        m1.put("Mahnaz", "31");
        m1.put("Ayan", "12");
        m1.put("Daisy", "14");


        t1.put("Zara", "8");
        t1.put("Mahnaz", "31");
        t1.put("Ayan", "12");
        t1.put("Daisy", "14");


        m1.remove("Ayan");

        System.out.println();

        System.out.println("Map Elements");
        System.out.print("\t" + m1);
    }
}
