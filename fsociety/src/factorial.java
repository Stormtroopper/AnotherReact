
public class factorial
{
public static void main(String args[])
{
int n=5;
int fact=n;
int i;
for(i=(n-1);i>1;i--)
{
	fact=fact*i;
}
System.out.println("factorial of no is"+fact);
}
}
