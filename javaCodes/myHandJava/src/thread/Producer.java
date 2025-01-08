package thread;

/*
 * 生产者
 */
public class Producer implements Runnable{
    private Drop drop;

    public Producer(Drop drop) {
        this.drop = drop;
    }

    @Override
    public void run() {
        drop.add("Apple");
    }
  
}
