package hand;

public class Person {
  public static int age;

  public static void run() {
    System.out.println("static void run");
    age = 30;  // 直接访问类变量，不能直接访问实例变量和实例方法
  }

  static class Test {

  }
}
