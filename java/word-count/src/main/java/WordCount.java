import java.util.Map;
import java.util.HashMap;
import java.util.List;

public class WordCount {

    public Map<String, Integer> phrase(String phrase) {
        Map<String, Integer> wordCount = new HashMap();
        String[] words = phrase.replaceAll("[^a-zA-Z0-9 ]", "").split("\\s+");
        for (String word : words) {
            String formattedWord = word.toLowerCase();
            wordCount.put(formattedWord, wordCount.getOrDefault(formattedWord, 0) + 1);
        }
        return wordCount;
    }
}
