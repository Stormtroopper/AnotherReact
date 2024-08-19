import java.util.*;
public class palindrome
{
public static void main(String args[])
{
String org,rev="";
int i;
Scanner sc=new Scanner(System.in);
System.out.println("enter a string");
org=sc.nextLine();
System.out.println("enter the length of the string");
int length=org.length();
for(i=length-1;i>=0;i--)
   rev=rev+org.charAt(i);
   if(org.equals(rev))
System.out.println("string is a palindrome");
else
	System.out.println("string is not a palindrome");
}
}

