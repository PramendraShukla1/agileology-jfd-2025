package Encapsulation;

class EncapClass{
    private String name;
    private int idNum;
    private int age;

    public int getAge(){
        return age;
    }

    public String getName(){
        return name;
    }

    public int getIdNum(){
        return idNum;
    }


    public void setAge(int newAge){
       age = newAge;
    }

    public void setName(String newName){
        name = newName;
    }

    public void setId(int newId){
        idNum = newId;
    }

}

public class Encapsulation {
    static void main(String[] args) {
        EncapClass encap = new EncapClass();

        encap.setName("Pramendra");
        encap.setAge(27);
        encap.setId(1);

        System.out.print("Name : "+ encap.getName() + " Age : "+ encap.getAge()+ " Id: "+ encap.getIdNum());


    }


}
