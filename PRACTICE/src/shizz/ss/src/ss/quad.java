package ss;
import java.util.Scanner;


public class quad {
	public static void main(String args[])
	{
		int a,b,c;
		double x,y;
		Scanner in=new Scanner(System.in);
		System.out.println("enter the values of a,b and c");
		a=in.nextInt();
		b=in.nextInt();
		c=in.nextInt();
		double q=(b*b)-4*a*c;
System.out.println("q="+q);
		if(q>0)
		{
			System.out.println("real roots");
		}
		else
		{
			double d=Math.sqrt(q);
			System.out.println("Math.sqrt(q)="+d);
			x=(-b-d)/(2*a);
			y=(-b+d)/(2*a);
			System.out.println("roots are:"+x+""+y);
			
		}
	}

}
