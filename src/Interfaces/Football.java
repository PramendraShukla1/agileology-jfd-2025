package Interfaces;

public interface Football extends Sports {
    public void HomeTeamScored(int points);
    public void visitingTeamScored(int points);
    public void endOfQuarter(int quarter);
}
