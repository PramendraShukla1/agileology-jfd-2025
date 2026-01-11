package Exceptions;


class InsufficientFundsException extends  Exception {
    private double amount;

    public InsufficientFundsException(double amount){
        this.amount = amount;
    }

    public double getAmount(){
        return amount;
    }
}

class CheckingAmount {
    private double balance;
    private int number;

    public CheckingAmount(int number){
        this.number = number;
    }

    public void deposit(double amount){
        balance += amount;
    }

    public void withdraw(double amount) throws
        InsufficientFundsException {
            if (amount <= balance){
                balance -= amount;
            }else{
                double needs = amount - balance;
                throw  new InsufficientFundsException(needs);
            }
        }

    public double getBalance(){
return  balance;
    }

    public int getAccNumber(){
        return  number;
    }

}


public class CustomizedException {
    static void main(String[] args) {
        CheckingAmount ca = new CheckingAmount(1000);
        System.out.println("Deposit 1500rs");
        ca.deposit(1500);
        // System.out.println(ca.getBalance());
        try{
            System.out.println("Withdraw 1200rs...");
            ca.withdraw(1200.00);
            System.out.println("Withdraw 700rs...");
            ca.withdraw(700.00);

        }catch (InsufficientFundsException e){
            System.out.println("Not sufficient amount : "+ e.getAmount());
            e.printStackTrace();
        }


    }
}

