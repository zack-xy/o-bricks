package generic;

class Notepad<K, V> {
  private K key;
  private V value;
  public K getKey() {
    return this.key;
  }
  public V getValue() {
    return this.value;
  }
  public void setKey(K key) {
    this.key = key;
  }
  public void setValue(V value) {
    this.value = value;
  }
}

public class GenericsDemo09 {
  public static void main(String[] args) {
    Notepad<String, Integer> t = null;
    t = new Notepad<String, Integer>();
    t.setKey("汤姆");
    t.setValue(20);
    System.out.println("姓名： " + t.getKey());
    System.out.println("年龄" + t.getValue());
  }
}
