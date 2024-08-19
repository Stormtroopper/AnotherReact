package ss;
import java.util.Scanner;
public class bellamn {
	private int D[]; 
	private int n;
	public static final int MAX_VALUE = 999;
	public bellamn(int n)
	{
	this.n = n; 
	D = new int[n + 1];
	}
	public void Bellmaneval(int source, int A[][])
	{
	for (int node = 1; node <= n; node++)
	{
	D[node] = MAX_VALUE;
	}
	D[source] = 0;
	for (int node = 1; node <= n - 1; node++)
	{
	for (int sn = 1; sn <= n; sn++)
	{
	for (int dn = 1; dn <= n; dn++)
	{
	if (A[sn][dn] != MAX_VALUE)
	{
	if (D[dn] > D[sn]+ A[sn][dn])
	D[dn] = D[sn] + A[sn][dn];
	}}}}
	for (int sn = 1; sn <= n; sn++)
	{
	for (int dn = 1; dn <= n; dn++)
	{
	if (A[sn][dn] != MAX_VALUE)
	{
	if (D[dn] > D[sn]+ A[sn][dn])
	System.out.println("The Graph contains negative edge cycle");
	}
	}
	}
	for (int v= 1; v <= n; v++)
	{
	System.out.println("distance of source " + source + " to "+ v + " + D[v]");  

	}
	}
	public static void main(String[ ] args)
	{
	int n = 0; 
	int source;
	Scanner sc = new Scanner(System.in); 
	System.out.println("Enter the number of vertices"); 
	n = sc.nextInt();
	int A[][] = new int[n + 1][n + 1]; 
	System.out.println("Enter the adjacency matrix"); 
	for (int sn = 1; sn <= n; sn++)
	{
	for (int dn = 1; dn <= n; dn++)
	{
	A[sn][dn] = sc.nextInt(); 
	if (sn == dn)
	{
	A[sn][dn] = 0; 
	continue;
	}
	if (A[sn][dn] == 0)
	{
	A[sn][dn] = MAX_VALUE;
	} } }
	System.out.println("Enter the source vertex"); 
	source = sc.nextInt();
	bellamn b = new bellamn (n); 
	b.Bellmaneval(source, A); 
	sc.close();
	}


}


