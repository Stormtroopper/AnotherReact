package ss;
import java.util.Scanner;

public class strings {
public static void main(String args[])
{
	String str,sub;
	int i,j,l;
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the string to print its substring");
	str=sc.nextLine();
	l=str.length();
	System.out.println("substring of\t"+str+"\t are");
	for(j=0;j<l;j++)
	{
		for(i=1;i<=l-j;i++)
		{
			sub=str.substring(j,j+i);
			System.out.println(sub);
		}
	}
	
	
	}

}
