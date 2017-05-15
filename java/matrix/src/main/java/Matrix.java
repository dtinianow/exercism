import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public final class Matrix {

    private final String matrix;
    private List<List<Integer>> matrixAsList = new ArrayList<>();

    public Matrix(String matrix) {
        this.matrix = matrix;
        this.matrixAsList = matrixAsList();
    }

    public int getRowsCount() {
        return matrixAsList.size();
    }

    public int getColumnsCount() {
        return matrixAsList.get(0).size();
    }

    public int[] getRow(int index) {
        return matrixAsList.get(index).stream().mapToInt(i -> i).toArray();
    }

    public int[] getColumn(int index) {
        int rowsCount = getRowsCount();
        int[] column = new int[rowsCount];

        for (int i = 0; i < rowsCount; i++) {
            column[i] = matrixAsList.get(i).get(index);
        }

        return column;
    }

    private List<List<Integer>> matrixAsList() {
        List<List<Integer>> matrixAsList = new ArrayList<>();
        List<String> rows = Arrays.asList(matrix.split("\\n"));
        int height = rows.size();
        int width = rows.get(0).split(" ").length;

        for (int i = 0; i < height; i++) {
            List<Integer> placeholder = new ArrayList<>();
            List<String> rowDigits = Arrays.asList(rows.get(i).split(" "));

            for (int j = 0; j < width; j++) {
                placeholder.add(j, Integer.valueOf(rowDigits.get(j)));
            }
            matrixAsList.add(i, placeholder);
        }

        return matrixAsList;
    }
}