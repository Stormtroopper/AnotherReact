import java.util.Random;
public class thread 
{
public static void main(String args[])
{
	Threadth=new Thread(new thread);
	th.start;
}
}
class sqthread implements Runnable
{
	int n;
	sqthread(int no)
{
		this.n=n;
}
	public void run()
	{
		System.out.println("second thread :square of"+n"is:"+n*n);
	}
	class cuthread implements Runnable
	{
		int n;
		cuthread(int no)
		{
			this.n=n;
		}
		public void run()
		{
			System.out.println("third thread:cube of the thread"+n"is:"n*n*n);		}
	}
	class rando implements Runnable
	{
		int no;
		Random ran=new Random();
		public void run()
		{
			int i;
			for(i=0;i<50;i++>)
			{
				no=	R.nextInt();
				System.out.println("first thread:The random number is":+no);
				thread T1=new thread(new sqthread(no));
				T1.start();
				thread T2=new thread(new cuthread(no));
				T2.start();
				try
				{
					thread.sleep(450);			}
						System.out.println("****************************************");
			}
			catch(InterruptedException E)
			{
				System.out.println(E);
			}
		}
	}
}
			}
		}
	}
	
	
}
	
