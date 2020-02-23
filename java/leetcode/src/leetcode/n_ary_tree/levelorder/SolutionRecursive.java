
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

class SolutionRecursive {
  private List<List<Integer>> output = new ArrayList<>();

  public List<List<Integer>> levelOrder(Node root) {
    if (root == null)
      return output;

    helper(root, 0);

    return output;
  }

  private void helper(Node node, int level) {
    if (output.size() <= level) {
      output.add(new LinkedList<Integer>());
    }

    List<Integer> levelList = output.get(level);
    levelList.add(node.val);

    for (Node child : node.children) {
      helper(child, level + 1);
    }
  }

}
