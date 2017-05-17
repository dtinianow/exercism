import java.util.Arrays;
import java.util.regex.Pattern;

public class LargestSeriesProductCalculator {

    private String digitsText;

    public LargestSeriesProductCalculator(String digitsText) {
        if (digitsText == null) {
            throw new IllegalArgumentException("String to search must be non-null.");
        }

        if (Pattern.compile("\\D").matcher(digitsText).find()) {
            throw new IllegalArgumentException("String to search may only contains digits.");
        }

        this.digitsText = digitsText;
    }

    public long calculateLargestProductForSeriesLength(int seriesLength) {
        if (seriesLength > digitsText.length()) {
            throw new IllegalArgumentException("Series length must be less than or equal to the length of the string to search.");
        }

        if (seriesLength < 0) {
            throw new IllegalArgumentException("Series length must be non-negative.");
        }

        String[] digits = digitsText.split("");
        long maxProduct = 0;

        for (int i = 0; i <= digitsText.length() - seriesLength; i++) {
            long[] temp = new long[seriesLength];

            for (int j = 0; j < seriesLength; j++) {
                temp[j] = Integer.parseInt(digits[i + j]);
            }

            long product = Arrays.stream(temp).reduce(1, (a, b) -> a * b);

            if (product > maxProduct) {
                maxProduct = product;
            }
        }

        return maxProduct;
    }

}
