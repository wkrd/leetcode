package leetcode._2796_sudoku_solver;

import java.util.Arrays;

class Solution {

    private final boolean[][] rowDigitUsed = new boolean[9][9];
    private final boolean[][] colDigitUsed = new boolean[9][9];
    private final boolean[][] boxDigitUsed = new boolean[9][9];
    private int emptySlots = 9 * 9;

    // backtracking template:

    /**
     * Backtrack plan:
     * 
     * <pre>
     * backtrack: if(solved) 
     *   output return
     * 
     *  for candidate in candidates: 
     *      if valid candidate: 
     *          add
     *          backtrack
     *          remove
     * 
     *  sudko(board, x, y):
     *      if (board is full and valid) return
     * 
     *  for digit in candidates: 
     *      if available digit (row, col, box): 
     *          add digit 
     *          backtrack(board, nextX, nextY)
     *          remove digit
     * </pre>
     */

    public void solve(char[][] board, int x, int y) {
        if (emptySlots == 0)
            return;

        boolean filled = board[x][y] != '.';
        int nextX = (x + 1) % 9;
        int nextY = (nextX == 0 ? y + 1 : y);

        if (filled) {
            solve(board, nextX, nextY);
            return;
        }

        for (int digit = 0; digit < 9; digit++) {

            boolean digitValid = !rowDigitUsed[x][digit] && !colDigitUsed[y][digit]
                    && !boxDigitUsed[x / 3 + ((y / 3) * 3)][digit];

            if (digitValid) {
                char ch = (char) ('0' + digit + 1);
                addDigit(board, x, y, ch);

                // printBoard(board);
                // System.out.println("Empty slots: " + emptySlots);

                solve(board, nextX, nextY);

                if (emptySlots != 0) {
                    removeDigit(board, x, y);
                }
            }
        }

    }

    public void addDigit(char[][] board, int x, int y, char ch) {
        // System.out.printf("Adding %d %d %c\n", x, y, ch);

        int v = Character.getNumericValue(ch) - 1;

        if (v < 0 || v >= 9)
            throw new RuntimeException("" + v);

        rowDigitUsed[x][v] = true;
        colDigitUsed[y][v] = true;
        int boxX = x / 3;
        int boxY = (y / 3) * 3;
        int boxNum = boxX + boxY;
        boxDigitUsed[boxNum][v] = true;

        board[x][y] = ch;
        emptySlots--;
    }

    public void removeDigit(char[][] board, int x, int y) {
        int v = Character.getNumericValue(board[x][y]) - 1;

        if (v < 0 || v >= 9)
            throw new RuntimeException("" + v);

        rowDigitUsed[x][v] = false;
        colDigitUsed[y][v] = false;
        int boxX = x / 3;
        int boxY = (y / 3) * 3;
        int boxNum = boxX + boxY;
        boxDigitUsed[boxNum][v] = false;

        board[x][y] = '.';
        emptySlots++;
    }

    public void initializeCaches(char[][] board) {
        for (int row = 0; row < board.length; row++) {
            for (int col = 0; col < board.length; col++) {
                char ch = board[row][col];
                if (ch != '.') {
                    addDigit(board, row, col, ch);
                }
            }
        }
    }

    public void solveSudoku(char[][] board) {
        initializeCaches(board);
        solve(board, 0, 0);
    }

    public static void printBoard(char[][] board) {
        System.out.println("Board: ");
        for (char[] row : board) {
            System.out.println(Arrays.toString(row));
        }
        try {
            // System.in.read();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String args[]) {

        // char[][] board = new char[][] {
        // //
        // new char[] { '2', '.', '.', '.', '.', '.', '.', '.', '.', },
        // new char[] { '.', '.', '.', '.', '.', '.', '.', '.', '3', },
        // new char[] { '.', '.', '.', '.', '.', '.', '.', '.', '.', },
        // new char[] { '.', '.', '.', '.', '.', '.', '.', '.', '.', },
        // new char[] { '.', '.', '.', '.', '5', '.', '.', '.', '.', },
        // new char[] { '.', '.', '.', '.', '.', '.', '.', '.', '.', },
        // new char[] { '.', '.', '.', '.', '.', '.', '.', '.', '.', },
        // new char[] { '.', '.', '.', '.', '.', '.', '.', '.', '.', },
        // new char[] { '.', '.', '.', '.', '.', '.', '3', '2', '1', } };

        char[][] board = new char[][] { //
                { '5', '3', '.', '.', '7', '.', '.', '.', '.' }, //
                { '6', '.', '.', '1', '9', '5', '.', '.', '.' }, //
                { '.', '9', '8', '.', '.', '.', '.', '6', '.' }, //
                { '8', '.', '.', '.', '6', '.', '.', '.', '3' }, //
                { '4', '.', '.', '8', '.', '3', '.', '.', '1' }, //
                { '7', '.', '.', '.', '2', '.', '.', '.', '6' }, //
                { '.', '6', '.', '.', '.', '.', '2', '8', '.' }, //
                { '.', '.', '.', '4', '1', '9', '.', '.', '5' }, //
                { '.', '.', '.', '.', '8', '.', '.', '7', '9' }, //
        };

        new Solution().solveSudoku(board);
        printBoard(board);
    }
}
