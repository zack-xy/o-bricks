package fileIO;

import java.io.File;
import java.util.function.Consumer;

public class Files {
  // 搜索
  // dir是一个文件夹
  // 这个方法的作用是，传入一个文件夹
  // 循环这个文件夹，如果是文件的话，Consumer消费一下(由外部定义)，在TestMain中是System.out.println打印
  // 如果是文件夹的话，Consumer消费一下，然后递归循环这个子文件夹
  public static void search(File dir, Consumer<File> operation) {
    if(dir == null || operation == null) return;
    if(!dir.exists() || dir.isFile()) return;
    File[] subFiles = dir.listFiles();
    for(File sf : subFiles) {
      operation.accept(sf);
      if(sf.isFile()) continue;
      search(sf, operation);
    }
  }

  // 为什么要这么写
  // 因为mkdirs这个方法不能带文件名的路径
  // 所以要先getParentFile
  // mkdirs会外到里不存在的文件夹都会创建
  public static void mkparents(File file) {
    File parent = file.getParentFile();
    if(parent.exists()) return;
    parent.mkdirs();  // 创建父目录
  }

  // 移动文件
  // 如果待移动的文件和目标文件都不存在，不执行
  // 如果待移动文件存在或者目标文件已经存在，不执行
  public static void move(File src, File dest) { 
    if(src == null || dest == null) return;
    if(!src.exists() || dest.exists()) return;
    mkparents(dest);
    src.renameTo(dest);
  }

  // 删除本身
  public static void delete(File file) {
    if(file == null || !file.exists()) return;
    clean(file);
    file.delete();
  }

  // 清除文件夹
  public static void clean(File dir) {
    if(dir == null || !dir.exists() || dir.isFile()) return;
    File[] subfiles = dir.listFiles();
    for(File sf : subfiles) {
      delete(sf);
    }
  }
}
