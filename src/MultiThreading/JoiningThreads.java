package MultiThreading;


class JoiningThreadsDemo implements Runnable {
    JoiningThreadsDemo(){
        System.out.println("Thread "+ Thread.currentThread().getName()+ ", "+ " Start: New");
    }

    public void run(){
        System.out.println("Thread: "+ Thread.currentThread().getName()+ ", "+ "Start: Running");
        for(int i = 4; i>0; i--){
            System.out.println("Thread: "+ Thread.currentThread().getName() + ", "+ i);
        }
        System.out.println("Thread: "+ Thread.currentThread().getName()+ ", "+ "State: Dead");
    }
}

public class JoiningThreads {
    static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(new JoiningThreadsDemo(), "Thread - 1");
        Thread t2 = new Thread(new JoiningThreadsDemo(), "Thread - 2");
        Thread t3 = new Thread(new JoiningThreadsDemo(), "Thread - 3");

        t1.start();
        t1.join();

        t2.start();
        t2.join();

        t3.start();

    }



}
