package ss;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class cudp {
	public static DatagramSocket DS;
	public static int clientport=789,serverport=790;
	public static void main(String[]args)throws Exception
	{
	byte[]  buffer=new byte[1024];
	int offset;
	DS=new DatagramSocket(serverport);
BufferedReader BR=new BufferedReader(new InputStreamReader(System.in));
System.out.println("Server waiting!!!");
InetAddress IA=InetAddress.getLocalHost();
	System.out.println("message received!");
	while(true)
	{
		System.out.println("CLIENT:");
		String str=BR.readLine();
		if(str.equals("end"))
		break;
		buffer=str.getBytes();
		DS.send(new DatagramPacket(buffer,str.length(),IA,clientport));
		DatagramPacket DP=new DatagramPacket(buffer,buffer.length);
		DS.receive(DP);
		String px=new String(DP.getData(),offset=0,DP.getLength());
		System.out.println("SERVER:"+px);
	  }
  }
}
	
	
	

