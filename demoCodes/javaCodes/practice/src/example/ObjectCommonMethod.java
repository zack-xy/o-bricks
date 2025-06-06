package src.example;


import java.util.HashSet;
import java.util.Objects;

/**
 *
 *
 *  public final native Class<?> getClass()
 *  public native int hashCode()
 *  public boolean equals(Object obj)
 *  protected native Object clone() throws CloneNotSupportedException
 *  public String toString()
 *  public final native void notify()
 *  public final native void notifyAll()
 *  public final native void wait(long timeout) throws InterruptedException
 *  public final void wait(long timeout, int nanos) throws InterruptedException
 *  public final void wait() throws InterruptedException
 *  protected void finalize() throws Throwable {}
 *
 */

// TODO equals和hashCode的示例
class EqualExample {
    private int x;
    private int y;
    private int z;

    public EqualExample(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    @Override
    public boolean equals(Object o) {
        // 判断两个对象是否引用同一个对象
       if (this == o) return true;
       // 对任何不是 null 的对象 x 调用 x.equals(null) 结果都为 false
       if (o == null || getClass() != o.getClass()) return false;

       EqualExample that = (EqualExample) o;

       if (x != that.x) return false;
       if (y != that.y) return false;
       return z == that.z;
    }

    @Override
    public int hashCode() {
        int result = 17;
        result = 31 * result + x;
        result = 31 * result + y;
        result = 31 * result + z;
        return result;
    }
}

// TODO toString的示例
class ToStringExample {
    private int number;

    public ToStringExample(int number) {
        this.number = number;
    }
}

// TODO clone的示例
class CloneExample {
    private int a;
    private int b;

    @Override
    protected CloneExample clone() throws CloneNotSupportedException {
        // // 如果一个类没有实现 Cloneable 接口又调用了clone()方法，就会抛出这个异常CloneNotSupportedException
        return (CloneExample) super.clone();
    }
}

// TODO 浅拷贝
class ShallowCloneExample implements Cloneable {
    private int[] arr;

    public ShallowCloneExample() {
        arr = new int[10];
        for (int i=0;i<arr.length;i++) {
            arr[i]=i;
        }
    }

    public void set(int index, int value) {
        arr[index] = value;
    }

    public int get(int index) {
        return arr[index];
    }

    @Override
    protected ShallowCloneExample clone() throws CloneNotSupportedException {
        return (ShallowCloneExample) super.clone();
    }
}

// TODO 深拷贝
class DeepCloneExample implements Cloneable {
    private int[] arr;

    public DeepCloneExample() {
        arr = new int[10];
        for (int i=0;i<arr.length;i++) {
            arr[i]=i;
        }
    }

    public void set(int index, int value) {
        arr[index] = value;
    }

    public int get(int index) {
        return arr[index];
    }

    @Override
    protected DeepCloneExample clone() throws CloneNotSupportedException {
        DeepCloneExample result = (DeepCloneExample) super.clone();
        result.arr = new int[arr.length];
        for (int i=0;i<arr.length;i++) {
            result.arr[i]=arr[i];
        }
        return result;
    }
}

// TODO clone()替代方案
// 因为clone方法比较复杂，还会抛出异常，可以使用拷贝构造函数或者拷贝工厂来拷贝对象
class CloneConstructorExample {
    private int[] arr;

    public CloneConstructorExample() {
        arr = new int[10];
        for (int i=0;i<arr.length;i++) {
            arr[i]=i;
        }
    }

    public CloneConstructorExample(CloneConstructorExample original) {
        arr = new int[original.arr.length];
        for (int i=0;i<arr.length;i++) {
            arr[i] = original.arr[i];
        }
    }

    public void set(int index, int value) {
        arr[index] = value;
    }

    public int get(int index) {
        return arr[index];
    }
}

// TODO Object通用方法
public class ObjectCommonMethod {

    public static void main(String[] args) {

        EqualExample e1 = new EqualExample(1, 1, 1);
        EqualExample e2 = new EqualExample(1, 1, 1);
        System.out.println(e1.equals(e2)); // true
        HashSet<EqualExample> set = new HashSet<EqualExample>();
        set.add(e1);
        set.add(e2);
        // 如果不重写hashCode方法，此时为2，重写了为1
        System.out.println(set.size());
        System.out.println("********-分割线-*******");

        ToStringExample e3 = new ToStringExample(1);
        // src.example.ToStringExample@65b3120a 这种形式，其中 @ 后面的数值为散列码的无符号十六进制表示
        System.out.println(e3.toString());

        System.out.println("********-分割线-*******");

        CloneExample ce = new CloneExample();
        // clone()是Object的protected方法，不是public，一个类不显式去重写clone()，就不能调用clone()方法
        // ce.clone();
        try {
            ce.clone();
        } catch (CloneNotSupportedException e) {
            // e.printStackTrace();  这里会打印异常
        }

        System.out.println("********- ShallowCloneExample 分割线-*******");

        ShallowCloneExample sce1 = new ShallowCloneExample();
        ShallowCloneExample sce2 = null;

        try {
            sce2 = sce1.clone();
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException(e);
        }
        sce1.set(2, 222);
        System.out.println(sce2.get(2));

        System.out.println("********- DeepCloneExample 分割线-*******");

        DeepCloneExample dce1 = new DeepCloneExample();
        DeepCloneExample dce2 = null;

        try {
            dce2 = dce1.clone();
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException(e);
        }

        dce1.set(2, 222);
        System.out.println(dce2.get(2));

        System.out.println("********- CloneConstructorExample 分割线-*******");

        CloneConstructorExample cce1 = new CloneConstructorExample();
        CloneConstructorExample cce2 = new CloneConstructorExample(cce1);
        cce1.set(2, 222);
        System.out.println(cce2.get(2));


    }

}
