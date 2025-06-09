package src.example;

 // 单例模式一：
class Rocket {
    private static Rocket instance = new Rocket();

    // 构造方法私有化
    private Rocket() {}

    // 公共静态方法，返回唯一的那个实例
    public static Rocket getInstance() {
        return instance;
    }
}

// 单例模式二：
class Rocket2 {
    private static Rocket2 instance = null;

    // 构造方法私有化
    private Rocket2() {}

    // 这个方法线程不安全
    public static Rocket2 getInstance() {
        if (instance == null) {
            instance = new Rocket2();
        }

        return instance;
    }

}

// TODO 单例模式
public class singleCase {

}
