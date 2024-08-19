package ss;
import java.util.Random;
import java.util.Scanner;
import java.time.*;
public class leakyalgo {
public static void main(String [] args)
{
int bcktsize,iter, oprate, line, total=0, rem_bytes;
int pkt[] = new int[25];
Scanner in = new Scanner(System.in);
System.out.println("Enter the no of input lines");
line = in.nextInt();
System.out.println("Enter the no of iterations");
iter = in.nextInt();
System.out.println("Enter the bucket size and output rate :");
bcktsize = in.nextInt();
oprate = in.nextInt();
Random rand = new Random();
for(int i=0;i<iter;i++)
{
System.out.println("Iteration: " + (i+1));
for(int j=0;j<line;j++)
 { 
 rand.setSeed(System.nanoTime());
 pkt[j] = rand.nextInt(500);
 total += pkt[j];
  if(total<=bcktsize)
 {
   System.out.println(" Input from line " + (j+1) + " with packet size " + pkt[j] +"bytes are accepted for the bucket Number of bytes in bucket is : "+ total);
 }
  else
 {
  total-=pkt[j];
  System.out.println(" Input from line " + (j+1) + " with packet size " + pkt[j]+" bytes are discarded from the bucket Number of bytes in bucket is: " + total);
 }
}
 if(oprate> total)
 { 
  rem_bytes = total;
  total = 0;
  System.out.println("---------------------------------");
  System.out.println("Output rate of the bucket is: "+ oprate + " \n Bytes sent out of the bucket is " + rem_bytes);
  System.out.println("--------------------------------");
 }
 else
 {
  total -= oprate;
  System.out.println("---------------------------------");
  System.out.println(" Output rate of the bucket is " + oprate +" \n Number of bytes reamaining in bucket is" +total);
  System.out.println("---------------------------------");
 }
}
}
}
