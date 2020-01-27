package leetcode.n_queens_2;

import java.util.Arrays;

public class Solution {

    int numSolutions = 0;

    public boolean isAttacked(int[][] board, int row, int col) {
        return board[row][col] != 0;
    }

    public void print(int[][] board) {

        for (int i = 0; i < board.length; i++) {
            System.out.println(Arrays.toString(board[i]));
        }
    }

    public void solve(int[][] board, int row) {

        for (int col = 0; col < board.length; col++) {
            print(board);

            if (!isAttacked(board, row, col)) {
                placeQueen(board, row, col);

                if (row == board.length - 1) {
                    numSolutions++;
                } else {
                    solve(board, row + 1);
                }

                removeQueen(board, row, col);
            }

        }
    }

    public void placeQueen(int[][] board, int row, int col) {
        if (board[row][col] != 0)
            throw new RuntimeException("cant put here");
        int n = board.length;

        for (int i = 0; i < n; i++) {
            safeMark(board, row, i, 1);
            safeMark(board, i, col, 1);
        }

        for (int i = 1; i < n; i++) {
            safeMark(board, row + i, col + i, 1);
            safeMark(board, row + i, col - i, 1);
            safeMark(board, row - i, col + i, 1);
            safeMark(board, row - i, col - i, 1);
        }

        board[row][col] = -1;
    }

    public void removeQueen(int[][] board, int row, int col) {
        if (board[row][col] != -1)
            throw new RuntimeException("no queen");

        int n = board.length;

        for (int i = 0; i < n; i++) {
            safeMark(board, row, i, -1);
            safeMark(board, i, col, -1);
        }

        for (int i = 1; i < n; i++) {
            safeMark(board, row + i, col + i, -1);
            safeMark(board, row + i, col - i, -1);
            safeMark(board, row - i, col + i, -1);
            safeMark(board, row - i, col - i, -1);
        }

        board[row][col] = 0;
    }

    public void safeMark(int[][] board, int row, int col, int val) {
        if (row >= 0 && col >= 0 && row < board.length && col < board.length) {
            board[row][col] = board[row][col] + val;
        }
    }

    public int totalNQueens(int n) {

        if (n <= 1) {
            return 1;
        }
        int[][] board = new int[n][n];

        solve(board, 0);

        return numSolutions;
    }

    public static void main(String[] args) {

        System.out.println(new Solution().totalNQueens(8));

    }
}