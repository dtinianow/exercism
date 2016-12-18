import java.util.Set;
import java.util.HashSet;
import java.util.Arrays;

public class Pangrams {
    private static final int ALPHABET_COUNT = 26;

    public static boolean isPangram(String phrase) {
        String[] allLetters = phrase.replaceAll("[_\\d\\W]", "").toLowerCase().split("");
        Set<String> uniqueLetters = new HashSet<String>(Arrays.asList(allLetters));
        return uniqueLetters.size() == ALPHABET_COUNT;
    }
}