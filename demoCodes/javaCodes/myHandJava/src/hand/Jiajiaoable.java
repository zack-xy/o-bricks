package hand;

public interface Jiajiaoable {
  void jiaoZuQiu();
  // 默认方法，可以定义实现
  default void jiaoLanQiu() {
    System.out.println("教篮球");
  }
}
