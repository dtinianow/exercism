import java.util.Map;
import java.util.HashMap;
import java.util.List;

public class WordCount {

    private final Map<String, Integer> wordCount = new HashMap();

    public Map<String, Integer> phrase(String phrase) {
        String[] words = phrase.replaceAll("[^a-zA-Z0-9 ]", "").split("\\s+");
        for (String word : words) {
            String formattedWord = word.toLowerCase();
            Integer count = wordCount.get(formattedWord);
            if (count == null) {
                wordCount.put(formattedWord, 1);
            } else {
                wordCount.put(formattedWord, count + 1);
            }
        }
        return wordCount;
    }
}
