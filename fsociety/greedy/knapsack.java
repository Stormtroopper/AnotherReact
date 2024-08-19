package greedy;
import java.util.*;
public class greedy
{
	void knapsack(int n,float w,float p,int ca)
	{
		float X[]=new float[],total=0;
		int i;
		for(i=0;i<n;i++)
		{
			X[i]=(float)0.0;
			for(i=0;i<n;i++)
			{
				if(w[i]>ca)
				{
					break;
				}
				else {
					x[i]=(float)1.0;
					total=total+p[i];
					ca=int(ca-w[i]);
				}
			}
			if(i<n)
			{
				X[i]=ca/w[i];
				total=total+(X[i]*p[i]);
				System.out.println("result:");
				for(i=0;i<n;i++)
				{
					System.out .println(X[i]+"\t");
					System.out.println("max profit:"+total);
				}
			}
		}
			}
		}
}
public static void main(String args[])
{
	float w[]=new float[12],p[]=new float[21],ca;
	int n,i,j;
	float ra=new float[32],temp;
	greedy gd=new gd();
	System.out.println("enter no of objects");
    	
