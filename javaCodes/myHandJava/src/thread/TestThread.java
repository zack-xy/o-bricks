package thread;

public class TestThread {
  public static void main(String[] args) {
    // 第一种创建线程的方法
    Thread thread = new Thread(() -> {
      System.out.println("新线程 >>> " + Thread.currentThread().getName());
    });
    thread.start();

    // 创建线程方法二
    Thread thread2 = new MusicThread();
    thread2.start();
  }
}
