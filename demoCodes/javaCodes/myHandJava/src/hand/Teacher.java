package hand;

public class Teacher implements Jiajiaoable{

    @Override
    public void jiaoZuQiu() {
      System.out.println("Teacher - jiaozuQiu");
    }

    @Override
    public void jiaoLanQiu() {
      Jiajiaoable.super.jiaoLanQiu();

      System.out.println("Teacher - jiaoLanQiu");
    }
   
}
