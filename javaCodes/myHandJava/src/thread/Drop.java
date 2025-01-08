package thread;

public class Drop {
  private String food;
  private boolean empty = true;
  
  /**
   * get方法再消费者线程执行
   * @return
   */
  public synchronized String get() {
    while(empty) {
      try {
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
      empty = false;
      this.food = food;
      notifyAll();
    }
  }
}
