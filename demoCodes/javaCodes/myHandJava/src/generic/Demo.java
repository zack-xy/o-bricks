package generic;

public class Demo {

  private static int add(int a, int b) {
    System.out.println(a + "+" + b + "=" + (a+b));
    return a + b;
  }

  private static float add(float a, float b) {
    System.out.println(a + "+" + b + "=" + (a+b));
    return a + b;
  }

  private static double add(double a, double b) {
    System.out.println(a + "+" + b + "=" + (a+b));
    return a + b;
  }

  // 以上代码可以通用范型
  private static <T extends Number> double add2(T a, T b) {
    System.out.println(a + "+" + b + "=" + (a.doubleValue() + b.doubleValue()));
    return a.doubleValue() + b.doubleValue();
  }
}
