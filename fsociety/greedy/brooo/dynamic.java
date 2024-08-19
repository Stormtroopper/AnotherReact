package brooo;
import java.util.Scanner;
import java.io.*;
class dynamicknap
{
int v[][]=new int[10][10];
int p[]=new int[10];
int w[]=new int[12];
int x[]=new int[15];
int i,j;
int max(int a,int b)
{
	if(a<b)
	{
		return a;
	}
	else {
		return b;
	}
}
void knapsack(int n,int m)
{
for(i=0;i<=n;i++)
{
	for(j=0;j<=m;j++)
	{
		if(i==0||j==0)
		{
			v[i][j]=0;
			else if(w[i]>j)
			{
				v[i][j]=v[i-1][j];
			}
			else
			{
				v[i][j]=max(v[i-1][j].v[i-1][j]-w[i]+p[i]);
			}
		}
	}
}
}
void items(int n,int m)
{
for(i=0;i<=n;i++)
{
	x[i]=0;
	i=n;
	j=m;
}
while(i!=0 && j!=0)
{
	if(v[i][j]!=v[i-1][j])
	{
		x[i]=1;
		j=j-w[i];
	}
	i=i--;
}
}
}
class dynamicknap
{
	public static void main(String[] args)
	{
		dynamicknap DS=new dynamicknap();
		int i,m,n;
		Scanner sc=new scanner(System.in);
		System.out.println("enter the no of items");
		n=sc.nextInt();
		System.out.println("enter the weight of the knapsack");
		m=sc.nextInt();
		System.out.println("enter the weights of th given items");
		for(i=1;i<=n;i++)
		{
			DS.w[i]=s.nextInt();
			System.out.println(""enter the profits of the items");"
             for(i=0;i<=n;i++)
             {
            	 DS.p[i]=sc.nextInt();
             }
			DS.items(n,m);
			System.out.println("max profit is "+DS.v[n][m]);
			DS.items(n,m);
			System.out.println("item selected are:);"
					for(i=1;i<=n;i++)
					{
						if(DS.x[i]==1)
						{
							System.out.println(""+i+"");
						}
					}
		}	
	
}