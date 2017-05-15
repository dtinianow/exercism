import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public final class LuhnValidator {

    public Boolean isValid(String input) {
        String cleanedInput = removeWhitespace(input);

        if (isInvalidFormat(cleanedInput)) {
            return false;
        }

        return isValidLuhn(cleanedInput);
    }

    private String removeWhitespace(String input) {
        return input.replaceAll("[\\s]", "");
    }

    private Boolean isValidLuhn(String input) {
        List<Integer> digits = applyDoublingRule(formatDigits(input));

        return digits.stream().mapToInt(Integer::intValue).sum() % 10 == 0;
    }

    private List<Integer> formatDigits(String digits) {
        return Arrays.asList(digits.split(""))
                .stream()
                .map(Integer::parseInt)
                .collect(Collectors.toList());
    }

    private List<Integer> applyDoublingRule(List<Integer> digits) {
        int digitCount = digits.size();

        for (int i = 0; i < digitCount; i++) {
            if (shouldBeDoubled(digitCount, i)) {
                int newVal = digits.get(i) * 2;
                if (newVal > 9) {
                    newVal -= 9;
                }
                digits.set(i, newVal);
            }
        }

        return digits;
    }

    private Boolean shouldBeDoubled(int digitCount, int i) {
        return (isEven(digitCount) && isEven(i)) || (!isEven(digitCount) && !isEven(i));
    }


    private Boolean isInvalidFormat(String formatted) {
        return Pattern.compile("[^0-9 ]").matcher(formatted).find() || formatted.length() <= 1;
    }

    private Boolean isEven(int value) {
        return value % 2 == 0;
    }
}