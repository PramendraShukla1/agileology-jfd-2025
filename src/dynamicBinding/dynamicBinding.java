package dynamicBinding;

class Animal {
    public void walk(){
        System.out.println("Animal is walking!");
    }
}

class Cat extends Animal{
    public void walk(){
        System.out.println("Cat can also walk and it's an animal too!");
    }
}

public class dynamicBinding {
    static void main(String[] args) {
        Animal a = new Animal();
        Animal an = new Cat();

        a.walk();
        an.walk();


    }
}
