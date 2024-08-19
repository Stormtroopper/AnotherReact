package ss;

public class fibonacci {
public static void main(String args[])
{
int previous,next,fib,n;
previous=0;
next=1;
for(n=1;n<=20;n++)
{
System.out.println(previous);
fib=previous+next;
previous=next;
next=fib;
}
}
}
