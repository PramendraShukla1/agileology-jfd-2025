package Interfaces;

public interface Hockey extends Sports{
    public void homeGoalScored();
    public void visitingGoalScored();
    public void endOfPeriod(int period);
    public void overTimePeriod(int ot);

}
