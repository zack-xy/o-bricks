package thread;


public class SynchronizedObjectLock implements Runnable {
  static SynchronizedObjectLock instance = new SynchronizedObjectLock();

    @Override
    public void run() {
      // 同步代码块形式 - 锁为this，两个线程使用的锁是一样的，线程1必须等到线程0释放了该锁后，才能执行
      synchronized(this) {
        System.out.println("我是线程" + Thread.currentThread().getName());
        try {
          Thread.sleep(3000);
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "结束");
      }
    }

    public static void main(String[] args) {
      Thread t1 = new Thread(instance);
      Thread t2 = new Thread(instance);
      t1.start();
      t2.start();
    }

  
}
