
package leetcode._200_number_of_islands;

import java.util.Stack;

class Solution {
  class Node {
    public final int x;
    public final int y;

    public Node(int y, int x) {
      this.x = x;
      this.y = y;
    }
  }

  public int numIslands(char[][] grid) {
    int islandCount = 0;

    for (int y = 0; y < grid.length; y++) {
      for (int x = 0; x < grid[y].length; x++) {
        if (grid[y][x] == '1') {
          exploreAndDestroyIsland(grid, new Node(y, x));
          islandCount++;
        }
      }
    }

    return islandCount;
  }

  private void exploreAndDestroyIsland(char[][] grid, Node n) {
    Stack<Node> s = new Stack<>();
    s.push(n);

    while (s.size() > 0) {
      n = s.pop();
      grid[n.y][n.x] = '0'; // we sink the island as we go

      // T B L R
      if (n.y > 0)
        if (grid[n.y - 1][n.x] == '1')
          s.push(new Node(n.y - 1, n.x));
      if (n.y < grid.length - 1)
        if (grid[n.y + 1][n.x] == '1')
          s.push(new Node(n.y + 1, n.x));
      if (n.x > 0)
        if (grid[n.y][n.x - 1] == '1')
          s.push(new Node(n.y, n.x - 1));
      if (n.x < grid[0].length - 1)
        if (grid[n.y][n.x + 1] == '1')
          s.push(new Node(n.y, n.x + 1));
    }
  }

  public static void main(String[] args) {

    char[][] f = new char[][]

    { { '1', '1', '0', '0', '0' }, { '1', '1', '0', '0', '0' }, { '0', '0', '1', '0', '0' },
        { '0', '0', '0', '1', '1' } };

    System.out.println(new Solution().numIslands(f));
  }
}
