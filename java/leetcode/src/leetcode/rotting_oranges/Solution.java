package leetcode.rotting_oranges;

class Solution {

    public static int EMPTY = 0;
    public static int FRESH = 1;
    public static int ROTTEN = 2;

    public int orangesRotting(int[][] grid) {
        int time = 0;
        while (decay(grid, time) > 0) {
            time++;
        }
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == FRESH)
                    return -1;
            }
        }
        return time;
    }

    // returns number of newly rotted oranges
    int decay(int[][] grid, int time) {
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                int rottenAtTime = ROTTEN + time;
                if (grid[i][j] == rottenAtTime) {
                    if (i > 0 && grid[i - 1][j] == FRESH) {
                        grid[i - 1][j] = rottenAtTime + 1;
                        count++;
                    }
                    if (j > 0 && grid[i][j - 1] == FRESH) {
                        grid[i][j - 1] = rottenAtTime + 1;
                        count++;
                    }
                    if (i < grid.length - 1 && grid[i + 1][j] == FRESH) {
                        grid[i + 1][j] = rottenAtTime + 1;
                        count++;
                    }
                    if (j < grid[0].length - 1 && grid[i][j + 1] == FRESH) {
                        grid[i][j + 1] = rottenAtTime + 1;
                        count++;
                    }

                }
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().orangesRotting(new int[][] { { 1, 1, 1 }, { 1, 0, 1 }, { 2, 0, 2 } })

        );
    }
}
