package OOPS;


class cals {
    int add(int a, int b){
        return a + b;
    }
    int add(int a, int b, int c){
        return a+b+c;
    }

    double add(double a, double b){
        return  a+ b;
    }

    static void main(String[] args) {
        cals cl = new cals();
        System.out.println(cl.add(10, 20));
        System.out.println(cl.add(10, 30));
        System.out.println(cl.add(20, 30, 50));
    }
}

class Animal{
    void sound(){
        System.out.println("Animal makes a sound!");
    }
}

class Dog extends Animal{
    @Override
    void sound(){
        System.out.println("Dog Barks!");
    }
}

class Cat extends Animal{
    @Override
    void sound(){
        System.out.println("Cat meows!");
    }
}

public class Polymorphism {

//    Two Type of Polymorphism
//    -> Compile Time Polymorphism (Method Overloading)
//    -> Run Time Polymorphism (Method Overriding)

    static void main(String[] args) {
        Animal a1 = new Dog();
        Animal a2 = new Cat();

        a1.sound();
        a2.sound();
    }







}
