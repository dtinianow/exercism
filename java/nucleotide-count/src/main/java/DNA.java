import java.util.List;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;

public class DNA {
    private String nucleotides;
    private Map<Character, Integer> nucleotideCounts;

    public DNA(String input) {
        nucleotides = input;
        nucleotideCounts = new HashMap<>();
        nucleotideCounts.put('A', 0);
        nucleotideCounts.put('C', 0);
        nucleotideCounts.put('G', 0);
        nucleotideCounts.put('T', 0);
        countNucleotides(nucleotides);
    }

    public int count(char nucleotide) {
        if (nucleotideCounts.get(nucleotide) == null) { throw new IllegalArgumentException(); }
        return nucleotideCounts.get(nucleotide);
    }

    public Map<Character, Integer> nucleotideCounts() {
        return nucleotideCounts;
    }

    private void countNucleotides(String nucleotides) {
        for (char nucleotide : nucleotides.toCharArray()) {
            nucleotideCounts.put(nucleotide, nucleotideCounts.get(nucleotide) + 1);
        }
    }
}
