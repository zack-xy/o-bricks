package generic;

class Info<T> {
  private T var;
  public void setVar(T var) {
    this.var = var;
  }
  public T getVar() {
    return this.var;
  }
  public String toString() {
    return this.var.toString();
  }
}

public class GenericsDemo21 {
  public static void main(String[] args) {
    Info<String> i1 = new Info<String>();
    Info<Object> i2 = new Info<Object>();
    i1.setVar("hello");
    i2.setVar(new Object());
    fun(i1);
    fun(i2);
  }

  // <? super String> 是范型 下限通配符
  // 这里表示Info接受范型的类型只能是String或者String的父类型
  // 不能是String的子类型

  // 针对范型通配符，有一下几种
  /**
   * <?>无限制通配符
   * <? extends E>  extends 关键字声明了类型的上界，表示参数化的类型可能是所指的类型，或者是此类型的子类
   * <? super E> super 关键字声明了类型的下界，表示参数化的类型可能是指定的类型，或者是此类型的父类
   * 
   * 
   * 
   * 
   * 
   * 
   */
  public static void fun(Info<? super String> temp) {
    System.out.println(temp + ", ");
  }
}
