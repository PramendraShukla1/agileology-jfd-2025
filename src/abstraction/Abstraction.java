package abstraction;

abstract class Employee {
    private int id;
    private String name;
    private String address;

    public Employee (int id, String name, String address){
        System.out.println("Constructor of Employee class!");
        this.id = id;
        this.name = name;
        this.address = address;
    }

    public abstract double computePay();

    public void mailCheck(){
        System.out.println("Mailing a check to "+ this.name + " to address: " + this.address);
    }

    public String toString(){
        return id + " " +name + " " + address;
    }

    public String getName(){
        return name;
    }

    public String getAddress(){
        return address;
    }

    public void setAddress(String newAddress){
        address = newAddress;
    }

    public int getId(){
        return id;
    }

}



class Salary extends Employee{
    private double salary;

    public Salary(int id, String name, String Address, double salary){
        super(id, name, Address);
        setSalary(salary);
    }

    public void mailCheck(){
        System.out.println("Within mail Check of Salary Class!");
        System.out.println("Mailing check to "+ getName() + "with salary "+ salary);
    }

    public double getSalary(){
        return salary;
    }

    public void setSalary(double newSalary){
        if(newSalary >= 0){
            salary = newSalary;
        }
    }

    public double computePay(){
        System.out.println("Computing salary pay for "+ getName());
        return salary/52;
    }


}

public class Abstraction {

    static void main(String[] args) {
//        Employee em = new Employee(01, "Pramendra", "Mumbai");
//        System.out.println("\n Call mail check using Employee reference...");
//        em.mailCheck();

        Salary s = new Salary(01, "Pramendra ", "Delhi", 30000.00);

        Employee e = new Salary(02, "Josh ", "London", 55000.00);

                System.out.println("Call mail check using Salary reference...");
                s.mailCheck();

                System.out.println("\n Call mail check using Employee reference...");
                e.mailCheck();



    }


}
