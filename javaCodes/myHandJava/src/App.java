
import hand.Person;

public class App {
    public static void main(String[] args) throws Exception {
        Person.age = 10;
        Person.run();

        Person p1 = new Person();
        System.out.println(p1.age);
    }
}
