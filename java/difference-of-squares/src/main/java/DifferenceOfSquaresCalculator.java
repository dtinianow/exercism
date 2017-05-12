import java.util.stream.IntStream;

public final class DifferenceOfSquaresCalculator {

    public int computeSquareOfSumTo(int value) {
        int sum = ((value + 1) * value) / 2;
        return sum * sum;
    }

    public int computeSumOfSquaresTo(int value) {
        return IntStream
                .rangeClosed(1, value)
                .map(i -> i * i)
                .sum();
    }

    public int computeDifferenceOfSquares(int value) {
        return computeSquareOfSumTo(value) - computeSumOfSquaresTo(value);
    }
}
