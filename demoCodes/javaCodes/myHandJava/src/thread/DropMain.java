package thread;

public class DropMain {
  /*
   * 1. 调用wait、notify必须是同一个obj对象
   * 2. 调用wait、notify的线程必须拥有obj对象的内部锁
   * 
   * 
   */
  public static void main(String[] args) throws Exception {
    Drop drop = new Drop();
    (new Thread(new Consumer(drop))).start();
    (new Thread(new Producer(drop))).start();
  }
}
