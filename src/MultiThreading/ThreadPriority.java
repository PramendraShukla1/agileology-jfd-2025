package MultiThreading;

public class ThreadPriority extends Thread {
    ThreadPriority(){}
    public void run(){
        System.out.println("Thread Name: "+ Thread.currentThread().getName() + " , Thread Priority: "+ Thread.currentThread().getPriority());

        for(int i = 4; i > 0; i--){
            System.out.println("Thread: "+ Thread.currentThread().getName() +" , "+ i);
        }
        try{
            Thread.sleep(500);
        }catch (InterruptedException e){
            e.printStackTrace();
        }
    }
    public void start(){
        super.start();
    }
}


class ThreadRunPriority{
    static void main(String[] args) {
        ThreadPriority tp_1 = new ThreadPriority();
        ThreadPriority tp_2 = new ThreadPriority();
        ThreadPriority tp_3 = new ThreadPriority();

        tp_1.start();
        tp_2.start();
        tp_3.start();

    }
}