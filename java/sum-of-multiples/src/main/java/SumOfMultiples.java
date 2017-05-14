import java.util.Arrays;
import java.util.stream.IntStream;

public final class SumOfMultiples {

    private final int maxValue;
    private final int[] multiples;

    public SumOfMultiples(int maxValue, int[] multiples) {
        this.maxValue = maxValue;
        this.multiples = multiples;
    }

    public int getSum() {
        return IntStream
                .range(1, maxValue)
                .filter(this::isMultiple)
                .sum();
    }

    private Boolean isMultiple(int value) {
        return Arrays
                .stream(multiples)
                .anyMatch(multiple -> value % multiple == 0);
    }
}