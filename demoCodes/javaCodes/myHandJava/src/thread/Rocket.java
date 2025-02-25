package thread;

// 单例模式，懒实例
// 需要加锁保证线程安全
public class Rocket {
  private static Rocket instance = null;
  private Rocket() {}
  public static synchronized  Rocket getInstance() {
    if(instance == null) {
      instance  = new Rocket();
    }
    return instance;
  }
}
