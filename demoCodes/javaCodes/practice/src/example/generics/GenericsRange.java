package src.example.generics;

import java.util.Iterator;
import java.util.List;

class A {}
class B extends A {}


// TODO 泛型的上限 extends
class InfoUp<T extends Number> {  // 此处泛型只能是数字类型
    private T var;
    public void setVar(T var) {
        this.var = var;
    }
    public T getVar() {
        return this.var;
    }
    public String toString() {
        return this.var.toString();
    }

}

// TODO 泛型的下限  super
class InfoDown<T> {
    private T var;
    public void setVar(T var) {
        this.var = var;
    }
    public T getVar() {
        return this.var;
    }
    public String toString() {
        return this.var.toString();
    }
}

interface Staff {
    int getSalary();
}
interface Passenger {
    boolean isStanding();
}

// 稍微复杂一点的例子
class Complex<E, T> {
    // E extends Comparable表示：E是可以比较的类
    // Comparable<? super E>表示：要对E进行比较，是E的消费者，所以类型至少得是E，所以super
    // E表示：返回类型是E
    // List<? extends E>表示：表示列表里存的是E或者E的子类型
    private <E extends Comparable<? super E>> E max(List<? extends E> el) {
        if (el == null) return null;
        // 迭代器返回的元素属于E的某个子类型
        Iterator<? extends E> iterator = el.iterator();
        E result = iterator.next();
        while (iterator.hasNext()) {
            E next = iterator.next();
            if (next.compareTo(result) > 0) result = next;
        }
        return result;
    }

    // TODO 多个限制
    // 工资低于2500元的上班族并且站立的乘客车票打8折
    public static <T extends Staff & Passenger> void discount(T t) {
        if (t.getSalary() < 2500 && t.isStanding()) {
            System.out.println("太穷了！车票打8折");
        }
    }
}



// TODO 泛型的上下限
public class GenericsRange {

    public static void funA(A a) {
        // funA的代码
    }

    public static void funB(B b) {
        funA(b);  // 不报错
    }

    public static void funC(List<A> listA) {
        // funC的代码
    }

    public static void funC2(List<? extends A> listA) {
        // funC的代码
    }

    public static void funD(List<B> listB) {
        // funC(listB);  这一行会报错
        funC2(listB);   // 这一行不会报错
    }

    public static void fun(InfoDown<? super String> temp) {  // 只能接受String或者Object的类型
        System.out.println(temp + ", ");
    }

    public static void main(String[] args) {
        InfoUp<Integer> iup = new InfoUp<>();

        InfoDown<String> i1 = new InfoDown<>();
        InfoDown<Object> i2 = new InfoDown<>();
        i1.setVar("hello");
        i2.setVar(new Object());
        fun(i1);
        fun(i2);

    }


}
