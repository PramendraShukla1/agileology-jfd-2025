package Math;



public class Maths {
    static void main(String[] args) {
double x = 124900.9;
double y = -497.999999;

System.out.println("Math log = "+ Math.log(x));
        System.out.println("Math log = "+ Math.log(y));

        System.out.println("Min No : "+ Math.min(x, y));
        System.out.println("Min No : "+ Math.max(x, y));


        System.out.println("Math abs : "+ Math.abs(x));
        System.out.println("Math abs : "+ Math.abs(y));

        System.out.println("Math SQRT : "+ Math.sqrt(x));
        System.out.println("Math SQRT : "+ Math.sqrt(y));

        System.out.println("Math Power : "+ Math.pow(2, 16));
        System.out.println("Math SQRT : "+ Math.sqrt(y));


        System.out.println("Ceil Function : "+ Math.ceil(4.9));
        System.out.println("Floor Function : "+ Math.floor(4.2));
        System.out.println("Nearest Integer: "+ Math.round(4.3));

        System.out.println("add: "+ Math.addExact(4, 4));
        System.out.println("sub: "+ Math.subtractExact(4, 4));
        System.out.println("mul: "+ Math.multiplyExact(4, 4));
        System.out.println("div: "+ Math.divideExact(4, 2));

    }
}
