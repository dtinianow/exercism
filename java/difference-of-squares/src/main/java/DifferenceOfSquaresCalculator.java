public final class DifferenceOfSquaresCalculator {

    public int computeSquareOfSumTo(int value) {
        int result = 0;

        for (int i = 1; i <= value; i++) {
            result += i;
        }

        return result * result;
    }

    public int computeSumOfSquaresTo(int value) {
        int result = 0;

        for (int i = 1; i <= value; i++) {
            result += i * i;
        }

        return result;
    }

    public int computeDifferenceOfSquares(int value) {
        return computeSquareOfSumTo(value) - computeSumOfSquaresTo(value);
    }
}
