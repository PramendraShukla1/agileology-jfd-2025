package OOPS;


class Aeroplane{
    int YOM;

    Aeroplane(int YOM){
        this.YOM  = YOM;
    }

    public void getAge(){
        System.out.println("The value of the variable named YOM in super class is: "+ YOM);
    }
}

//is a relationship

//class Car {}
//class Tyre extends Car{}
//class SoundSystem extends Car{}
//class Rubber extends Tyre{
//    // instanceof keyword
//
//}

// -> Tyre IS-A Car
// -> SoundSystem IS-A Car
// -> Rubber IS-A Tyre
// -> Hence: Rubber is also a Car



class subAeroplane extends Aeroplane{
    subAeroplane(int YOM){
        super(YOM);
    }

    public static void main(String[] args){
        subAeroplane sa = new subAeroplane(2022);
//        sa.getAge();
    }
}

class Rocket{
int z;
public void fuleType(){
    System.out.println("Fule type :- Rocket Fuel!");
}
public void color(){
    System.out.println("color :- White");
}
}

class Calculator {
   int num = 20;

   public void display(){
       System.out.println("This method is coming from super class calculator");
   }

//    public int sum(int a, int b){
//        res = a+b;
//        return res;
//    }
//    public int sub(int a, int b){
//        res = a-b;
//        return res;
//    }
//    public int mul(int a, int b){
//        res = a*b;
//        return res;
//    }
//    public int div(int a, int b){
//        res = a/b;
//        return res;
//    }
}

public class Inheritance extends Calculator {
    int num = 30;

    public void display(){
        System.out.println("This method is coming from sub class Inheritance");
    }



//    Features of Inheritance in java
//    -> Code Reusability
//    -> Extensibility
//    -> Implementation of the Method Overriding
//    -> Achieving Abstraction


    // Super Keyword


//    public void Jet(){
//        System.out.println("No. Of Jet :- 4");
//    }

    public void mainMethod(){
Inheritance inh = new Inheritance();
inh.display();
 super.display();
    }

    public static void main(String args[]){
        Inheritance in = new Inheritance();
        // in.mainMethod();
        // in.display();

//        System.out.println(in.sum(10, 20));
//        System.out.println(in.sub(30, 20));
//        System.out.println(in.mul(10, 10));
//        System.out.println(in.div(20, 10));
    }
}

//class Animal{}
//class Mammal extends Animal{}
//class Reptile extends Animal{}
//class Dog extends Mammal{
//    public static void main(String args[]){
//        Animal a = new Animal();
//        Mammal m = new Mammal();
//        Dog d = new Dog();
//
//        System.out.println(m instanceof Animal);
//        System.out.println(d instanceof Mammal);
//        System.out.println(d instanceof Animal);
//
////        Types of Inheritance
////        -> Single Inheritance
////        class A{}
////        class B extends A{}
////        -> Multi Level Inheritance
////        class A{}
////        class B extends A{}
////        class C extends B{}
////        -> Hierarchical Inheritance
////        class A{}
////        class B extends A{}
////        class C extends A{}
////        -> Multiple Inheritance (Java Does not support Multiple Inheritance)
////        class B{}
////        class C{}
////        class A extends B,C{}
//
//
//
//
//    }
//}
//        Java Aggregation
class Vehicle{
    private String vin;

    public String getVin(){
        return  vin;
    }

    public void setVin(String vin){
        this.vin = vin;
    }
}

class Speed {
    private double max;
    public  double getMax(){
        return  max;
    }

    public void setMax(double max){
        this.max = max;
    }
}

class van extends Vehicle{
    private Speed speed;

    public Speed getSpeed(){
        return  speed;
    }
    public void  setSpeed(Speed speed){
        this.speed = speed;
    }
    public void print(){
        System.out.println("Vin: "+this.getVin() + ", Max Speed: "+ speed.getMax());
    }
}

class Tester {
    public static void main(String[] args) {
        Speed speed = new Speed();
        speed.setMax(120);
        van v = new van();

        v.setVin("MP24147");
        v.setSpeed(speed);
        v.print();
    }
}