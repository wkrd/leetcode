package leetcode.n_ary_tree.postorder;

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

  private List<Integer> output = new LinkedList<>();

  public List<Integer> postorder(Node root) {

    helper(root);

    return output;
  }

  void helper(Node node) {
    if (node == null)
      return;

    for (Node child : node.children) {
      helper(child);
    }

    output.add(node.val);
  }
}
