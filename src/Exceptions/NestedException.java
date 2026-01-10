package Exceptions;

//Throw
//Throws

import java.rmi.RemoteException;

public class NestedException  {

    static void main(String[] args) {
try{
    int b[] = new int[1];
    try{
        int c = 0;
        int d = 1/c;
    }catch (Exception e){
        System.out.println("Exception thrown : "+ e);
    }

    System.out.println("Element at 2nd index : "+ b[2]);
}
catch (ArrayIndexOutOfBoundsException e){
    System.out.println("Exception Thrown : "+ e);
}

    }
}
