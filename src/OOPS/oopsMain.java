package OOPS;


class Calc {
    public int Sum(int a, int b){
        return  a + b;
    }

    public int Sum(int a, int b, int c){
        return  a + b + c;
    }

    public int Sub(int a, int b){
        return  b - a;
    }
    public int Mul(int a, int b){
        return  a * b;
    }
    public int Div(int a, int b){
        return  b/a;
    }


    // Methods
//    public String Percentage (){
//
//    }

//    modifier returnType nameOfMethod (arguments list){
//        // statement
//    }
}

//class Animal{
//    void Sound(){
//        System.out.println("Animal class having sound method");
//    }
//}

//class Dog extends  Animal{
//    @Override
//    void Sound(){
//        System.out.println("Dog will bark!");
//    }
//}
//
//class Cat extends Animal{
//    @Override
//    void Sound(){
//        System.out.println("Cat will bark!");
//    }
//}

public class oopsMain {

    int num1;
    int num2;

//     -> Inheritance
//    -> Encapsulation
//    -> Abstraction
//    -> Polymorphism
//    -> Classes - Classes are the blueprint from which we can create individual Objects
//    -> Objects -> The Objects are variable of the class itself

    oopsMain(){
        num1 = 3;
        num2 = 5;
    }


    // Overloading & Overriding


    static void main(String[] args) {
        System.out.println("Main method called!");

        oopsMain om = new oopsMain();

        System.out.println("num1: " + om.num1);
        System.out.println("num2: " + om.num2);


        // Java Constructor
//        -> Default Constructor -> Java provide a default constructor that initialize the object, if we do not create any constructor
//        -> No-Args Constructor -> It does not accept any parameter or argument, we can initialize the class data members
//        -> Parameterzed Constructor






//        -> Classes & Object

//                -> Phone (Class)
//                    -> Storage
//                    -> Color
//                    -> Ram Size
//                    -> Processor
//                    -> many more


//        -> Creating a java object
//                1. Declaration
//                2. Instantiation
//                3. Initialization

//        -> Java Constructor




//        Calc cl = new Calc();
//        System.out.println("method for two variables : "+ cl.Sum(10,20));
//        System.out.println("method for three variables : "+ cl.Sum(10,20, 30));

//        Animal an = new Dog();
//        an.Sound();
//
//        Animal a = new Cat();
//        a.Sound();




    }
}
