package hand;

// 单例模式
public class Single {
  // 私有的静态的实例变量
  private static Single instance = new Single();

  // 构造方法私有化
  private Single() {

  }

  // 公共的静态的方法，返回唯一的那个实例
  public static Single getInstance() {
    return instance;
  }
}
