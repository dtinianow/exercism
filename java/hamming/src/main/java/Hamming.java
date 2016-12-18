public class Hamming {
    public static int compute(String strandA, String strandB) {
        if (strandA.length() != strandB.length()) {
            throw new IllegalArgumentException("Strands must be equal length");
        }

        char[] splitStrandA = strandA.toCharArray();
        char[] splitStrandB = strandB.toCharArray();
        int total = 0;

        for (int i = 0; i < splitStrandA.length; i++) {
          if (splitStrandA[i] != splitStrandB[i]) { total += 1; }
        }

        return total;
    }
}