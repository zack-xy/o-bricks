package Singleton;

public class Singleton {
  public static volatile Singleton singleton;
  /**
    * 构造函数私有化，禁止外部实例化
  } */
  private Singleton() {};
  public static Singleton getInstance() {
    if(singleton == null) {
      synchronized (Singleton.class) {
        if(singleton == null) {
          singleton = new Singleton();
        }
      }
    }
    return singleton;
  }
}
