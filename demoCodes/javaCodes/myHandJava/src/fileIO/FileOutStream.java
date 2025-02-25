package fileIO;

import java.io.FileInputStream;
import java.io.FileOutputStream;

public class FileOutStream {
  public static void main(String[] args) throws Exception {

  }

  public void testFis() throws Exception {
    FileInputStream fis = new FileInputStream("/Users/zhengxiyun/Desktop/codes/1.txt");
    int byte1 = fis.read();
    int byte2 = fis.read();
    int byte3 = fis.read();

    byte[] bytes = new byte[100];
    // len是read方法的实际读取长度
    int len = fis.read(bytes);  // 有效长度

    String string = new String(bytes,0 , len,"GBK");
    System.out.println(string + "_");

    System.out.println(byte1);
    System.out.println(byte2);
    System.out.println(byte3);
    fis.close();
  }

  public void testFos() throws Exception {
    FileOutputStream fos = new FileOutputStream("/Users/zhengxiyun/Desktop/codes/1.txt", true);
    fos.write(77);
    fos.write(74);
    fos.write(76);
    fos.write(78);
    fos.write("测试代码中文".getBytes("GBK"));
    fos.close(); 
  }
}
