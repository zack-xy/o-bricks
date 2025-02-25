package generic;

class Point<T> {
  private T var;
  public T getVar() {
    return var;
  }
  public void setVar(T var) {
    this.var = var;
  }
}

public class GenericsDemo06 {
  public static void main(String[] args) {
    Point<String> p = new Point<String>();
    p.setVar("it");
    System.out.println(p.getVar().length());
  }
}
