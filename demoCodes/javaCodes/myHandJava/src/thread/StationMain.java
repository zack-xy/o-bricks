package thread;

public class StationMain {
  public static void main(String[] args) {
    Station station = new Station();
    for(int i=1;i<=4;i++) {
      Thread thread = new Thread(station);
      thread.setName("" + i);
      thread.start();
    }
  }
}
