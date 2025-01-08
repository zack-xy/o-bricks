package thread;

public class Drop {
  private String food;
  private boolean empty = true;
  
  public String get() {

    wait();

    return food;
  }

  public void add(String food) {
    this.food = food;
  }
}
