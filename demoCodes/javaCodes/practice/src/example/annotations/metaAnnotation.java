package src.example.annotations;

// TODO 元注解

import java.lang.annotation.*;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

/**
 *
 * JDK1.5提供4个:`@Target`、`@Retention`、`@Documented`、`@Inherited`
 * JDK1.8提供2个：`@Repeatable`、`@Native`
 *
 */
public class metaAnnotation {

    // TODO 元注解 - @Target
    // 描述注解的使用在哪
    enum ElementType {  // 自定义的示例，标准定义在java.lang.annotation.ElementType
        TYPE,  // 类、接口，枚举类
        FIELD, // 成员变量（包括：枚举常量）
        METHOD, // 成员方法
        PARAMETER, // 方法参数
        CONSTRUCTOR, // 构造方法
        LOCAL_VARIABLE, // 局部变量
        ANNOTATION_TYPE, // 注解类
        PACKAGE, // 可用于修饰：包

        TYPE_PARAMETER,  // 类型参数，JDK 1.8 新增
        TYPE_USE, // 使用类型的任何地方，JDK 1.8 新增
    }

    // TODO 元注解 - @Retention
    // @Retention描述注解保留的时间范围
    enum RetentionPolicy {
        SOURCE,  // 源文件保留
        CLASS,   // 编译期保留，默认值
        RUNTIME, // 运行期保留，可通过反射获取注解信息
    }

    // TODO 元注解 - @Documented
    // 描述在使用javadoc工具为类生成帮助文档时是否要保留其注解信息
    @Documented
    @Target({TYPE, METHOD})
    public @interface TestDocAnnotation {  // 定义了一个注解TestDocAnnotation
        public String value() default "default";
    }

    // 使用注解
    @TestDocAnnotation("myMthodDoc")
    public void testDoc() {

    }


    // TODO 元注解 - @Inherited
    // 被修饰的注解具有继承性，如果某个类使用了这个注解，子类自动具有该注解
    @Inherited
    @Retention(RUNTIME)
    @Target({ TYPE, METHOD })  //
    public @interface TestInheritedAnnotation {
        String[] values();
        int number();
    }

    // 使用注解
    @TestInheritedAnnotation(values = {"value"}, number = 10)
    class Person {

    }

    class Student extends Person {
        public void test() {
            Class clazz = Student.class;
            Annotation[] annotations = clazz.getAnnotations();
            for (Annotation annotation : annotations) {
                System.out.println(annotation.toString());
            }
        }
    }

    // TODO 元注解 - @Repeatable
    // 允许在同一申明类型(类、属性或方法)多次使用同一个注解

    // JDK8之前的重复注解
    public @interface Authority {
        String role();
    }

    // 参数是Authority注解数组，也就是多个重复注解
    public @interface Authorities {
        Authority[] value();
    }

    public class RepeatAnnotationUseOldVersion {

        @Authorities({ @Authority(role="Admin"), @Authority(role="Manager") })
        public void doSomething() {

        }
    }

    // JDK8的重复注解

    @Repeatable(Authorities2.class)   // 注解Authority2是可以重复的，重复的指向Authorities2
    public @interface Authority2 {
        String role();
    }

    public @interface Authorities2 {
        Authority2[] value();
    }

    public class RepeatAnnotationUseNewVersion {
        @Authority2(role="Admin")
        @Authority2(role="Manager")
        public void doSomething() {}
    }

    // TODO 元注解 - @Native
    // 修饰成员变量，表示这个变量可以被本地代码引用，常用于代码生成工具
    // 不常使用
}
