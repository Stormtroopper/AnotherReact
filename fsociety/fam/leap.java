
public class leap
{
public static void main(Strings args[])
{
int year=1996;
boolean isLeapYear=false;
if(year%400==0)
{
isLeapYear=true;
}
else
	if(year%100==0)
	{
		isLeapYear=false;
	}
	else
		if(year%4==0)
		{
			isLeapYear=true;
		}
		else
		{
		isLeapYear=false;
		}
	if(isLeapYear)
	{
		System.out.println("year"+year+"is a leap year");
	}
	else
	{
		System.out.println("year"+year+"is not a leap year");
	}
}
}
	}
		}
	}

