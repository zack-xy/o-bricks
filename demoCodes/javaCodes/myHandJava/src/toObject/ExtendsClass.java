package toObject;

import java.util.ArrayList;
import java.util.List;

public class ExtendsClass {

  public class Instrument {
    public void play() {
      System.out.println("Instrument is playing...");
    }
  }

  public class Wind extends Instrument {
    public void play() {
      System.out.println("Wind is playing...");
    }
  }

  public class Percussion extends Instrument {
    public void play() {
      System.out.println("Percussion is playing...");
    }
  }

  public static void main(String[] args) {
    List<Instrument> instruments = new ArrayList<Instrument>();
    instruments.add(new Wind());
    instruments.add(new Percussion());
    for(Instrument instrument : instruments) {
      instrument.play();
    }
    
  }
}
