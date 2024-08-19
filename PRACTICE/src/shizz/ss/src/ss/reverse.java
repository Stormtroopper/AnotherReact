package ss;
import java.util.Scanner;

public class reverse
{
public static void main(String[] args)
{
	Scanner sc=new Scanner(System.in);
int n;
int temp=0;
int rev=0;
System.out.println("Enter the number:");
n=sc.nextInt();
while(n!=0)
{
temp=n%10;
rev=rev*10+temp;
n=n/10;
}
System.out.println("rev number is :"+rev);
}
}
