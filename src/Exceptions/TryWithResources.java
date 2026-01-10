package Exceptions;

import java.io.FileReader;
import java.io.IOException;

public class TryWithResources {

    public static void main(String[] args){
        try(FileReader fr = new FileReader("/Users/pramendrashukla/IdeaProjects/aglJava/test.txt")){
            char[] a = new char[5];
            fr.read(a);
            for(char c : a)
                System.out.println(c);
        }
        catch (IOException e){
            e.printStackTrace();
        }

        finally {
            System.out.println("Error and Code Successfully ran!");
        }
    }

}
