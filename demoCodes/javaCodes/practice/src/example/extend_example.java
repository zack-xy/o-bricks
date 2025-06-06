package src.example;

// 父类
class SuperExample {
    protected int x;
    protected int y;

    public SuperExample(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public void func() {
        System.out.println("SuperExample.func()");
    }
}

// 子类 - 继承父类
class SuperExtendExample extends SuperExample {
    private int z;

    public SuperExtendExample(int x, int y, int z) {
        super(x, y);
        this.z = z;
    }

    public int getZ() {
        return z;
    }

    @Override
    public void func() {
        super.func();
        System.out.println("SuperExtendExample.func()");
    }
}

// TODO 继承的演示例子代码
public class extend_example {

    public static void main(String[] args) {
        SuperExample e = new SuperExtendExample(1,2,3);
        System.out.println("x is : " + e.x);
        System.out.println("y is : " + e.y);
        // z是private的，无法直接访问
        // System.out.println("z is : " + e.z);
        // e的类型是SuperExample，没有getZ方法
        // System.out.println("z is : " + e.getZ());
        e.func();
    }

}
