
public class reverse 
{
public static void main(String args[])
{ 
	int n=432;
   int rev=0;
   int t=0;
   while(n>0)
   {
	   t=n%10;
	   rev=rev*10+t;
	   n=n/10;
	   }
   System.out.println("reversed no is"+rev);
	}
}
