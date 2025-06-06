package src.example;

public interface InterfaceExample {
    void func1();

    // 可以定义默认实现
    default void func2() {
        System.out.println("func2");
    }

    // 默认是public，而且默认都是 static 和 final 的
    int x = 123;

    public int z = 0;

}
