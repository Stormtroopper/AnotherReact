
public class Fibonacci
{
public static void main(String[] args)
{
	int fibo1,fibo2,total,n;
	fibo1=0;
	fibo2=1;
	for(n=0;n<=12;n++)
	{
		System.out.println(fibo1);
		total=fibo1+fibo2;
		fibo1=fibo2;
		fibo2=total;
	}
  }
}
