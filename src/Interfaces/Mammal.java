package Interfaces;

public class Mammal implements interfaceJava{
    public void eat(){
        System.out.println("Mammals can eat");
    }
    public void travel(){
        System.out.println("Mammals can travel");
    }

    public int noOfEyes(){
        return 2;
    }

    static void main(String[] args) {
        Mammal m = new Mammal();

        m.eat();
        m.travel();
    }
}
