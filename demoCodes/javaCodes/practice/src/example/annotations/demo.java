package src.example.annotations;

import java.lang.annotation.*;
import java.util.ArrayList;
import java.util.List;

import static java.lang.annotation.ElementType.*;

class A {
    public void test() {

    }
}

class B extends A {

    // 重载父类的test方法
    @Override
    public void test() {
        super.test();
    }

    // @Override的定义
    @Target({ElementType.METHOD})   // 可以被用来修饰方法
    @Retention(RetentionPolicy.SOURCE)  // 只在编译时有效（只在源代码里，编译后的字节码里没有）
    public @interface Override {

    }

    // 被弃用的方法
    @Deprecated
    public void oldMethod() {

    }

    // @Deprecated的定义
    @Documented   // 会被文档化
    @Retention(RetentionPolicy.RUNTIME)  // 保留到运行时
    // 能够修饰构造方法，属性，局部变量，方法，包，参数，类型
    @Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE})
    public @interface Deprecated {

    }

    // 忽略告警
    @SuppressWarnings("rawtypes")  // 参数是字符串数组，1个参数时，可以省略{}
    public List processList() {
        List list = new ArrayList();
        return list;
    }

    // @SuppressWarnings的定义
    // 能够修饰类型、属性、方法、参数、构造器、局部变量
    @Target({ TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE })
    @Retention(RetentionPolicy.SOURCE)  // 只在编译时有效（只在源代码里，编译后的字节码里没有）
    public @interface SuppressWarnings {
        String[] value();  // 参数是一个字符串数组，多个参数时，这样调用@SuppressWarnings({"unchecked", "deprecation"})
    }
}

// TODO 常见的内置注解
public class demo {
}
