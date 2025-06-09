package src.example.annotations;

import java.io.FileNotFoundException;
import java.lang.annotation.*;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

// TODO 自定义注解
public class userDefined {

    // 定义自己的注解
    @Target(ElementType.METHOD)
    @Retention(RetentionPolicy.RUNTIME)
    public @interface MyMethodAnnotation {
        public String title() default "";
        public String description() default "";
    }

    // 使用注解
    public static class TestMethodAnnotation {

        @Override
        @MyMethodAnnotation(title="toStringMethod", description="override toString method")
        public String toString() {
            return "Override toString method";
        }

        @Deprecated
        @MyMethodAnnotation(title="old static method", description="deprecated old static method")
        public static void oldMethod() {
            System.out.println("old mthod, don't use it.");
        }

        @SuppressWarnings({"unchecked", "deprecation"})
        @MyMethodAnnotation(title="test method", description="suppress warning static method")
        public static void genericsTest() throws FileNotFoundException {
            List list = new ArrayList();
            list.add("abc");
            oldMethod();
        }

    }

    // 用反射接口获取注解信息
    public static void main(String[] args) {
        try {
            // 获取所有methods
            // 因为这里是内部静态类，跟下面这个步骤略有不同
            // TestMethodAnnotation.class.getClassLoader()
            //                .loadClass(("com.pdai.java.annotation.TestMethodAnnotation"))
            //                .getMethods();
            Method[] methods = userDefined.TestMethodAnnotation.class.getMethods();

            // 遍历
            for (Method method : methods) {
                // 方法上是否有MyMethodAnnotation注解
                if (method.isAnnotationPresent(MyMethodAnnotation.class)) {
                    try {
                        // 获取并遍历方法上的所有注解
                        for (Annotation anno : method.getDeclaredAnnotations()) {
                            System.out.println("Annotation in Method" + method + " : " + anno) ;
                        }

                        // 获取MyMethodAnnotation对象信息
                        MyMethodAnnotation methodAnno = method.getAnnotation(MyMethodAnnotation.class);

                        System.out.println(methodAnno.title());
                    } catch (Throwable ex) {
                        ex.printStackTrace();
                    }
                }
            }

        } catch (SecurityException e) {
            e.printStackTrace();
        }
    }

}
