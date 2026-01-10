package Exceptions;
import java.lang.Exception;

  class Exceptions extends Throwable {
    static void main(String[] args) {
        try{
            int a[] = new int[2];
            System.out.println("Access element three: "+ a[3]);
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Exception Thrown SuccessFully : "+ e);
        }
        System.out.println("Out of all the blocks");
    }
}



class MultipleCatchExample {
    public static void main(String[] args) {

        try {
            int[] arr = new int[2];
            int a = 10;
            int b = 0;

            // May cause ArithmeticException
            int result = a / b;

            // May cause ArrayIndexOutOfBoundsException
            System.out.println(arr[3]);
        }

        catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero");
        }

        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Array index is out of range");
        }

        catch (Exception e) {
            System.out.println("Error: Some other exception occurred");
        }

        finally {
            System.out.println("Program execution completed");
        }
    }
}
