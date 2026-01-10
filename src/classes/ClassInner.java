package classes;

class OuterClass{
    int num;

    private class InnerDemo{
        public void print(){
            System.out.println("This is an inner class!");
        }
    }

    void displayInner(){
        InnerDemo i = new InnerDemo();
        i.print();
    }
}

public class ClassInner {
    static void main(String[] args) {
        OuterClass oc = new OuterClass();

        oc.displayInner();
    }
}
