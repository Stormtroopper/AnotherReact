import java.util.Scanner;
public class broooo 
{
public static void main(String args[])
{
	int mar,pass;
	char gpa;
	pass=35;
	Scanner input=new Scanner(System.in);
	System.out.println("enter the marks");
	mar=input.nextInt();
	if(mar>=pass)
	{
		if(mar<90^mar>80)
		{
			gpa='A';
		}
		else {
			if(mar<80^mar>75)
			{
		gpa='B';
			}
			else 
				if(mar<=75^mar>60)
				{
					gpa='C';
				}
        else
        {
	        gpa='D';
        }
    System.out.println("Passed in the exam and grade is "+gpa);
		}
	}
		else
		{
			gpa='F';
			System.out.println("failed in the exam and grade is "+gpa);
	}
}}

		
