package src.example.generics;

// 一个泛型
class Point<T> {
    private T var;
    public T getVar() {
        return var;
    }
    public void setVar(T var) {
        this.var = var;
    }
}

// 多元泛型
class Notepad<K, V> {   // 指定了2个范型
    private K key;
    private V value;
    public K getKey() {
        return this.key;
    }
    public V getValue() {
        return this.value;
    }
    public void setKey(K key) {
        this.key = key;
    }
    public void setValue(V value) {
        this.value = value;
    }
}

// 泛型接口
interface Info<T> {
    public T getVar();
}

// 泛型类实现泛型接口
class InfoImpl<T> implements Info<T> {
    private T var;
    public InfoImpl(T var) {
        this.setVar(var);
    }

    public void setVar(T var) {
        this.var = var;
    }

    // TODO 泛型方法
    public <T> T getObject(Class<T> c) throws InstantiationException, IllegalAccessException {
        // 创建泛型对象
        T t = c.newInstance();
        return t;
    }

    @Override
    public T getVar() {
        return this.var;
    }
}

// TODO 泛型类示例
public class GenericsDemo {

    public static void main(String[] args) {

        System.out.println("**********-- 测试代码开始 --************");

        Point<String> p = new Point<>();  // 传入类型String
        p.setVar("Hello");
        System.out.println(p.getVar().length());

        System.out.println("**********-- 多元泛型 --************");
        Notepad<String, Integer> t = null;
        t = new Notepad<String, Integer>();
        t.setKey("zack");
        t.setValue(30);
        System.out.println("姓名： " + t.getKey());
        System.out.println("年龄： " + t.getValue());

        System.out.println("**********-- 泛型接口 --************");
        Info<String> i = new InfoImpl<>("Hello");
        System.out.println("内容：   " + i.getVar());
    }


}
