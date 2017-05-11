import java.util.HashMap;
import java.util.Map;

public class Scrabble {

    private static final Map<String, Integer> letterValues = new HashMap<>();
    static {
        letterValues.put("A", 1);
        letterValues.put("B", 3);
        letterValues.put("C", 3);
        letterValues.put("D", 2);
        letterValues.put("E", 1);
        letterValues.put("F", 4);
        letterValues.put("G", 2);
        letterValues.put("H", 4);
        letterValues.put("I", 1);
        letterValues.put("J", 8);
        letterValues.put("K", 5);
        letterValues.put("L", 1);
        letterValues.put("M", 3);
        letterValues.put("N", 1);
        letterValues.put("O", 1);
        letterValues.put("P", 3);
        letterValues.put("Q", 10);
        letterValues.put("R", 1);
        letterValues.put("S", 1);
        letterValues.put("T", 1);
        letterValues.put("U", 1);
        letterValues.put("V", 4);
        letterValues.put("W", 4);
        letterValues.put("X", 8);
        letterValues.put("Y", 4);
        letterValues.put("Z", 10);
    }
    private final String input;

    public Scrabble(String input) {
        this.input = input;
    }

    public int getScore() {
        int score = 0;

        if (input == null) {
            return score;
        }
        for (String letter : input.trim().toUpperCase().split("")) {
            score += letterValues.getOrDefault(letter, 0);
        }

        return score;
    }
}