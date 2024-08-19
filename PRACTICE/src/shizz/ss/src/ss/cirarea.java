package ss;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class cirarea 
{
public static void main(String[] arg)
{
int r=0;
System.out.println("enter the radius:");
try
{
BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
r=Integer.parseInt(br.readLine());
}
catch(NumberFormatException e)
{
System.out.println("invaid radius:"+e);
System.exit(0);
}
catch(IOException ie)
{
System.out.println("io error"+ie);
System.exit(0);
}
double area=Math.PI*r*r;
System.out.println("are of circle:"+area);
}
}

