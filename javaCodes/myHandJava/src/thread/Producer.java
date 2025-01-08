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
       String foods[] = {"beef", "bread", "apple", "cookie"};
       for(int i=0;i<foods.length;i++) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {}
        drop.add(foods[i]);
       }
       drop.add(null);
    }
  
}
