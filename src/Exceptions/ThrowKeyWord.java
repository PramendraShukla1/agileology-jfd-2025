package Exceptions;

import java.io.IOException;

public class ThrowKeyWord {

    static void checkAge(int age){
        if(age < 18){
            throw new ArithmeticException("Not Eligible for Voting!");
        }
        System.out.println("Eligible for Voting!");
    }
    static void main(String[] args) {

        checkAge(16);

    }
}


class ThrowsKeyword {
    static void readFile() throws IOException{
        throw new IOException("File not found!");
    }

    static void main(String[] args) {
        try{
            readFile();
        }catch (IOException e){
            System.out.println(e.getMessage());
        }
    }
}

class CombinedException {
    static void validateFile(String fileName) throws IOException{
        if(fileName == null){
            throw new IOException("File name cannot be null!");
        }
        System.out.println("File is valid!");
    }

    static void main(String[] args) {
        try{
            validateFile("a");
        }catch (IOException e){
            System.out.println(e.getMessage());
        }
    }
}