package Interfaces;

public class HockeyDemo implements Hockey {

    public void setHomeTeam(String name){
        System.out.println("Home Team : "+ name);
    }

    public void setVisitingTeam(){}
    public void homeGoalScored(){}
    public void visitingGoalScored(){}
    public void endOfPeriod(int period){};
    public void overTimePeriod(int ot){};

    static void main(String[] args) {
        Hockey HockeyDemo = new HockeyDemo();
        HockeyDemo.setHomeTeam("India");
    }
}
