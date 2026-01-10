package Array;


class Employee{
    public int emp_id;
    public String emp_name;
    public String Position;
    public String Company;

    Employee (int emp_id, String emp_name, String Position, String Company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.Position = Position;
        this.Company = Company;

    }
}

class EmployeeMain {
    public static void main(String[] args) {
        Employee[] arr;

        arr = new Employee[5];

        arr[0] = new Employee(001, "Shyam", "Software Engineer", "Apple");
        arr[1] = new Employee(002, "Radhe", "Electrical Engineer", "Google");
        arr[2] = new Employee(003, "Raju", "AI Engineer", "Microsoft");
        arr[3] = new Employee(004, "BabuLal", "Data Engineer", "Nvidia");
        arr[4] = new Employee(005, "Hariram", "Full Stack Engineer", "Accenture");


        for(int i=0; i<arr.length;i++){
            System.out.println("Element at " + i + " : { " + arr[i].emp_id + " , "+ arr[i].emp_name + " , "  + arr[i].Position + " , "+ arr[i].Company +  " } ");
        }



    }
}

class TwoDArray{
    public static void main(String[] args) {
        int arr[][] = {{1,2,3}, {4,5,6}, {7,8,9}};

        for (int i =0; i<arr.length; i++){
            for (int j = 0; j<arr[i].length; j++){
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
        //int arr[3][4] = {0, 1 ,2 ,3 ,4 , 5 , 6 , 7 , 8 , 9 , 10 , 11};
    }
}

class ThreeDArray{
    static void main(String[] args) {
        int arr[][][] = {
                {
                        {1,2},
                        {3,4}
                },
                {
                        {5,6},
                        {7,8}
                },
                {
                        {9,10},
                        {11,12}
                }
        };


        for(int i =0; i<arr.length; i++){
            System.out.println("Layer "+ i + ":");
            for(int j =0; j<arr[i].length; j++){
                for(int k=0; k<arr[i][j].length; k++){
                    System.out.print(arr[i][j][k] + " ");
                }
                System.out.println();
            }
        }
    }
}





public class Arrays {
    public static void main(String[] args) {
//        int[] arr= {5,7,9,4,2,1};
//
//        int arr_2[] = {3,5,7,9,5,6};

        int arr[] = new int[5];

       // int twoDArray[2][2] = {{10,20},{30,40}};


        arr[0] = 2;
        arr[1] = 3;
        arr[2] = 2;
        arr[3] = 3;
        arr[4] = 2;



        System.out.println(arr.length);



        for(int i=0; i<arr.length;i ++){
            System.out.println(arr[i]);
        }



    }
}
