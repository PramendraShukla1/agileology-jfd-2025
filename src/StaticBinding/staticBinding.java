package StaticBinding;


class Calculator {
    public static int add(int a, int b){
        return a + b;
    }

    public static int add(int a, int b, int c){
        return a+b+c;
    }

    public static double add (double a, double b){
        return a+b;
    }
}

public class staticBinding {
    static void main(String[] args) {
       System.out.println(Calculator.add(10, 20));
        System.out.println(Calculator.add(10, 20, 30));
        System.out.println(Calculator.add(40.0, 39.0));
    }

}
