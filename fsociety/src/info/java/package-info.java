package info.java;
import java.util.Scanner;
class multiply
{
	public static void main(String[] args)
	{
		int n,i;
		System.out.println("enter the integers ");
		Scanner sc=new Scanner(System.in);
		n=sc.nextInt();
		System.out.println("Multiplication table of"+n+":");
		for(i=0;i<n;i++)
		{
			System.out.println(n+"*"+i+"="+(n*i));
		}
		
	}
}