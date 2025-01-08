package utils;

public class Times {
  public interface Block {
    void execute();
  }

  public static void test(Block block) {

    long begin = System.currentTimeMillis();
    block.execute();
    long end = System.currentTimeMillis();
    double duration = (end - begin) / 1000.0;
    System.out.println("耗时： " + duration + "ms");
  }
}
