package generic;

interface Info<T> {
  public T getVar();
}

class InfoImpl<T> implements Info<T> {
  private T var;
  public InfoImpl(T var) {
    this.setVar(var);
  }
  public void setVar(T var) {
    this.var = var;
  }
  public T getVar() {
    return this.var;
  }
}

public class GenericsDemo24 {
  public static void main(String[] args) {
    Info<String> i = null;
    i = new InfoImpl<String>("汤姆");
    System.out.println("内容： " + i.getVar());
  }
}
