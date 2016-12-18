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
            if (isAnagram(word) && !isIdenticalToInput(word))  { anagrams.add(word); }
        }
        return anagrams;
    }

    private String sortLetters(String word) {
        char[] letters = word.toLowerCase().toCharArray();
        Arrays.sort(letters);
        return String.copyValueOf(letters);
    }

    private boolean isAnagram(String word) {
        return sortLetters(input).equals(sortLetters(word));
    }

    private boolean isIdenticalToInput(String word) {
        return input.equals(word.toLowerCase());
    }
}
