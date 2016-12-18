import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class Anagram {

    private String input;

    public Anagram(String input) {
        this.input = input.toLowerCase();
    }

    public List<String> match(List<String> words) {
        List<String> anagrams = new ArrayList<>();
        for (String word : words) {
            if (!input.equals(word.toLowerCase()) && sortLetters(input).equals(sortLetters(word))) {
               anagrams.add(word);
            }
        }
        return anagrams;
    }

    private String sortLetters(String word) {
        char[] letters = word.toLowerCase().toCharArray();
        Arrays.sort(letters);
        return String.copyValueOf(letters);
    }
}
