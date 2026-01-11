package MultiThreading;

public class DaemonThread extends Thread{
    DaemonThread(){

    }

    public void run(){
        System.out.println("Thread "+ Thread.currentThread().getName() + ", is Daemon: " + Thread.currentThread().isDaemon());
    }

    public void start(){
        super.start();
    }
}


class DaemonStart {
    static void main(String[] args) {
        DaemonThread dt1 = new DaemonThread();
        DaemonThread dt2 = new DaemonThread();
        DaemonThread dt3 = new DaemonThread();

        dt3.setDaemon(true);

        dt1.start();
        dt2.start();
        dt3.start();
    }
}