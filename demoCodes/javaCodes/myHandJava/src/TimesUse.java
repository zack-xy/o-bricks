
import utils.Times;

public class TimesUse {
  public static void main(String[] args) {
    Times.test(new Times.Block() {
        @Override
        public void execute() {
            int age = 10;
            for(int i=0;i<age;i++) {
              System.out.println(i);
            }
        }
      
    });
  }
}
