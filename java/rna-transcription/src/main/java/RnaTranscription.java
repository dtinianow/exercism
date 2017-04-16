import java.util.*;

public class RnaTranscription {

    private static final Map<Character, Character> dnaToRna = new HashMap<>();
    static {
        dnaToRna.put('G', 'C');
        dnaToRna.put('C', 'G');
        dnaToRna.put('T', 'A');
        dnaToRna.put('A', 'U');
    }

    public static String ofDna(String dnaString) {
        String rnaString = "";
        for (int i = 0; i < dnaString.length(); i++)
            rnaString += dnaToRna.get(dnaString.charAt(i));
        return rnaString;
    }
}