
package leetcode.n_ary_tree.levelorder;

import java.util.*;

// Definition for a Node.
class Node {
  public int val;
  public List<Node> children;

  public Node() {
  }

  public Node(int _val) {
    val = _val;
  }

  public Node(int _val, List<Node> _children) {
    val = _val;
    children = _children;
  }
};

class Solution {
  private List<List<Integer>> output = new LinkedList<>();

  public List<List<Integer>> levelOrder(Node root) {
    if (root == null)
      return output;

    Queue<Node> q = new LinkedList<Node>();
    q.add(root);

    while (!q.isEmpty()) {
      List<Integer> level = new LinkedList<Integer>();
      output.add(level);

      int levelSize = q.size();

      for (int i = 0; i < levelSize; i++) {
        Node node = q.remove();
        level.add(node.val);

        for (Node child : node.children) {
          q.add(child);
        }
      }

    }

    return output;
  }

}
