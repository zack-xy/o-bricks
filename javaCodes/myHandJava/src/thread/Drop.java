package thread;

public class Drop {
  private String food;
  // empty为true代表：消费者等待生产者生产
  // empty为false代表：代表商品生产完毕，生产者还要等待消费者消费完
  private boolean empty = true;
  
  /**
   * get方法再消费者线程执行
   * @return
   */
  public synchronized String get() {
    // 消费者线程拿到drop对象的内部锁
    while(empty) {
      try {
        // 调用wait，消费者线程会释放drop对象的内部锁，然后进入WAITING状态
        wait();  
      } catch (InterruptedException e) {}
    }
    empty = true;
    notifyAll();
    return food;
  }

  /**
   * add方法在生产者线程中执行
   * @param food
   */
  public synchronized void add(String food) {
    while(!empty) {
      try {
        wait();
      } catch (InterruptedException e) {}
    }
    empty = false;
    this.food = food;
    notifyAll();
  }
}
