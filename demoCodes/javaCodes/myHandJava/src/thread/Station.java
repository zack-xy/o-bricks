package thread;

public class Station implements Runnable {
  private int tickets = 100;
 
  /*
   * 卖一张票
   * @return true代表还有票，false代表没有票了
  */
  public boolean saleTicket() {
    if(tickets < 1) return false;
    tickets--;
    String name = Thread.currentThread().getName();
    System.out.println(name + "卖了一张票，还剩" + tickets + "张");
    return tickets > 0;
  }

  // 线程锁 - 同步语句
  public boolean saleTicket2() {
    // 以下代码，同一时间只有一个线程可以访问
    // this表示的是Station实例
    synchronized (this) {  // this,也可以写成“123”，因为字符串常量池，是同一个对象
      if(tickets < 1) return false;
      tickets--;
      String name = Thread.currentThread().getName();
      System.out.println(name + "卖了1张， 剩" + tickets + "张");
      return tickets > 0;
    }
  }

  // 也可以这样写
  // 也叫同步方法
  public synchronized boolean saleTicket3() {
    if(tickets < 1) return false;
    tickets--;
    String name = Thread.currentThread().getName();
    System.out.println(name + "卖了1张， 剩" + tickets + "张");
    return tickets > 0;
  }

  // 如果synchronized修饰类方法
  /**
   * 下面这个语句相当于
   * public static void test1() {
   *  synchronized(类对象) {   // 相当于Station.class
   *  }
   * } 
   * 
   * 每个类都有一个类对象
   * 每个类的类对象只有一份内存
   */
  public synchronized  static void test1() {}

  @Override
  public void run() {
    // while(saleTicket());
    // while(saleTicket2());
    while(saleTicket3());
  }

}
