package FileHandling;
import java.io.*;


public class Files {
    static void main(String[] args) {
        File f = null;

        String[] strs = {"test1.txt", "test2.txt"};
        try{
            for(String s:strs){
                f = new File(s);

                boolean bool = f.canExecute();

                String a = f.getAbsolutePath();

                System.out.println("absolute path: "+ a);

                System.out.println("Is File Executable: "+ bool);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}



class CreateFile {
    static void main(String[] args) {
        try{
byte bWrite [] = {65,66,67,68,69};
OutputStream os = new FileOutputStream("test.txt");

for (int x = 0; x < bWrite.length; x++){
    os.write(bWrite[x]);
}
os.close();

            InputStream is = new FileInputStream("test.txt");
            int size = is.available();

            for(int i=0; i<size; i++){
                System.out.print((char) is.read()+ " ");
            }
is.close();


        }catch (IOException e){
            System.out.println("Exception");
        }
    }
}


class ReadFile {
    static void main(String[] args) {
        try{
            byte bWrite [] = {65,66,67,68,69};
            OutputStream os = new FileOutputStream("test.txt");

            for (int x = 0; x < bWrite.length; x++){
                os.write(bWrite[x]);
            }
            os.close();

            InputStream is = new FileInputStream("test.txt");
            int size = is.available();

            for(int i=0; i<size; i++){
                System.out.print( is.read()+ " ");
            }
            is.close();


        }catch (IOException e){
            System.out.println("Exception");
        }
    }
}



