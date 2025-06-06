package src.example;

// TODO 类实现接口代码示例
public class InterfaceImplementExample implements InterfaceExample{

    @Override
    public void func1() {  // 必须要实现，因为接口没有默认实现
        System.out.println("func1");
    }

    @Override
    public void func2() {  // 可以不实现，接口有默认实现
        System.out.println("重写了func2");
    }


    public static void main(String[] args) {
        InterfaceExample e = new InterfaceImplementExample();
        e.func1();
        e.func2();
        System.out.println("InterfaceExample.x :" + InterfaceImplementExample.x);
        System.out.println("InterfaceImplementExample.x :" + InterfaceImplementExample.x);
        // InterfaceImplementExample.x = 111;  final改不了
    }
}
