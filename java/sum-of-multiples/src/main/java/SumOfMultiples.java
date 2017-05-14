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
                .filter(n -> isMultiple(n))
                .sum();
    }

    private Boolean isMultiple(int value) {
        for (int multiple : multiples) {
            if (value % multiple == 0) {
                return true;
            }
        }
        return false;
    }
}