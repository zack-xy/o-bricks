package thread;

/*
 * 消费者
 */
public class Consumer implements Runnable{
    private Drop drop;
    public Consumer(Drop drop) {
        this.drop = drop;
    }

    @Override
    public void run() {
        drop.get();
    }
  
}
