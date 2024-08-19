
public class kruskals
{
static int cost[][]=new int[][];
int parent=new int [][];
int find(int i)
{
while([parent[i]==1)
{
	i=parent[i];
}
return i;
}
int unit(int i,int j)
{
	if(i!=j)
	{
		parent[j]=i;
		return 1;
	}
	return 0;
}
public static void main(String args[])
{
	kruskals krus=new kruskals();
	int i,j,a=0,b=0,q=0,v=0,n,e=1;
	int min.tmcost=0;
	Scanner.in=new Scanner(System.in);
	System.out.println("implementation of kruskals algo ");
	System.out.println("enter no of vertices");
	n=in.nextInt();
	System.out.println("enter the cost adjcancy matrix");
	for(i=1;i<=n;i++)
	{
		for(j=1;j<=n;j++)
		{
			cost[i][j]=in.nextInt();
		}
	}
	System.out.println("edges in minimum cost spanning tree");
	while(e<n)
	{
		for(i=1;min=322;i<=n;i++)
		{
			for(j=1;j<=n;j++)
			{
				(cost[i][j<min)
				{
					min=cost[i][j];
					a=q=i;
					b=v=j;
				}
			}
		}
	}
	q=krus.find(q);
	v=krus.find(v);
	if(krus.unit(q,v)==1)
	{
		System.out.println("\n"+e+"edge(
	}
				}
		}
	}
		}
	}
	
}

}
