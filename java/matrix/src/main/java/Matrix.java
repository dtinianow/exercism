public final class Matrix {

    private int[][] matrix;
    private int columnCount = 0;
    private int rowCount = 0;

    public Matrix(String matrix) {
        this.matrix = matrixAsList(matrix);
    }

    public int getRowsCount() {
        return rowCount;
    }

    public int getColumnsCount() {
        return columnCount;
    }

    public int[] getRow(int index) {
        return matrix[index];
    }

    public int[] getColumn(int index) {
        int[] column = new int[rowCount];

        for (int i = 0; i < rowCount; i++) {
            column[i] = matrix[i][index];
        }

        return column;
    }

    private int[][] matrixAsList(String matrix) {
        String[] rows = matrix.split("\\n");
        rowCount = rows.length;
        columnCount = rows[0].split(" ").length;
        int[][] matrixAsList = new int[rowCount][columnCount];

        for (int i = 0; i < rowCount; i++) {
            int[] temp = new int[columnCount];
            String[] rowDigits = rows[i].split(" ");

            for (int j = 0; j < columnCount; j++) {
                temp[j] = Integer.valueOf(rowDigits[j]);
            }
            matrixAsList[i] = temp;
        }

        return matrixAsList;
    }
}