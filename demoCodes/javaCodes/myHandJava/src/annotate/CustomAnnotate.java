package annotate;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

class CustomAnnotate {
  // Target的使用
  @Target(ElementType.METHOD)
  public @interface MyAnnotate {

  }

  // Target的使用2，取多个枚举值
  @Target({ElementType.CONSTRUCTOR, ElementType.FIELD})
  public @interface MyAnnotate2 {

  }
}

