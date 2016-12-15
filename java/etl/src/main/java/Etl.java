import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class Etl {
  public Map<String, Integer> transform(Map<Integer, List<String>> old) {
    Map<String, Integer> newScores = new HashMap<String, Integer>();
    for (Map.Entry<Integer, List<String>> entry : old.entrySet()) {
      for (String oldLetter : entry.getValue()) {
        String newLetter = oldLetter.toLowerCase();
        newScores.put(newLetter, entry.getKey());
      }
    }
    return newScores;
  }
}
