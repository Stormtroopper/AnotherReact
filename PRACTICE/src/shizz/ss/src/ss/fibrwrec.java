package ss;
import java.util.Scanner;

public class fibrwrec {
	public static void main(String[] input)
	{
		int x,y;
		int n,z[];
		x=Integer.parseInt(input[0]);
		y=Integer.parseInt(input[1]);
Scanner sc=new Scanner(System.in);
System.out.println("enter the value of n");
n=sc.nextInt();
z=new int[n];
z[0]=x;
z[1]=y;
for(int i=2;i<n;i++)
{
z[i]=z[i-1]+z[i-2];
}
System.out.println("&lt;_______fibonacci series");
for(int i=0;i<n;i++)
{
System.out.println(z[i]);	
}

	}

}
