package fileIO;

import java.io.File;
import java.util.Arrays;
public class TestMain {
  public static void main(String[] args) {
    File file = new File("/Users/zhengxiyun/Desktop/codes");

    System.out.println(file.getName());
    // System.out.println(file.getParent());
    // System.out.println(file.getParentFile());
    // System.out.println(file.getPath());
    // System.out.println(file.getAbsolutePath());
    // System.out.println(file.getAbsoluteFile());

    String[] strs = file.list((dir, name) -> {  // 过滤
      return name.startsWith("A");  // 名字以A开头的
    });
    System.out.println(Arrays.toString(strs));

    // 列出这个目录的所有文件和文件夹
    Files.search(new File("/Users/zhengxiyun/Desktop/codes/docker"), (file2) -> {
      System.out.println(file2);
    });

    // 移动文件
    // 把第一个参数的文件移动到第二个参数的位置
    Files.move(new File("/Users/zhengxiyun/Desktop/codes/test.txt"), new File("/Users/zhengxiyun/Desktop/codes/a/b/haha.txt"));

    // 删除文件
    Files.delete(new File("/Users/zhengxiyun/Desktop/codes/fakeApp"));
  }
}
