package leetcode.n_ary_tree.postorder;

import java.util.*;

// Definition for a Node.

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
