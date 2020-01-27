package leetcode.n_queens;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class Solution {

    int numSolutions = 0;

    public boolean isAttacked(int[][] board, int row, int col) {
        return board[row][col] != 0;
    }

    public void print(int[][] board) {

        System.out.println("Board:");

        for (int i = 0; i < board.length; i++) {
            System.out.println(Arrays.toString(board[i]));
        }
    }

    public void solve(List<List<String>> answers, int[][] board, int row) {

        for (int col = 0; col < board.length; col++) {
            print(board);

            if (!isAttacked(board, row, col)) {
                placeQueen(board, row, col);

                if (row == board.length - 1) {
                    numSolutions++;

                    addAnswer(answers, board);
                } else {
                    solve(answers, board, row + 1);
                }

                removeQueen(board, row, col);
            }

        }
    }

    public static void addAnswer(List<List<String>> answers, int[][] board) {
        List<String> answer = new LinkedList<>();

        for (int i = 0; i < board.length; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < board.length; j++) {
                if (board[i][j] == -1) {
                    sb.append('Q');
                } else {
                    sb.append('.');
                }
                answer.add(sb.toString());
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

    public List<List<String>> solveNQueens(int n) {
        List<List<String>> answers = new LinkedList<>();

        int[][] board = new int[n][n];

        solve(answers, board, 0);

        return answers;
    }

    public static void main(String[] args) {
        List<List<String>> res = new Solution().solveNQueens(8);
        for (List<String> ans : res) {
            System.out.println("answer");

            for (String s : ans) {
                System.out.println(s);
            }
        }

    }
}