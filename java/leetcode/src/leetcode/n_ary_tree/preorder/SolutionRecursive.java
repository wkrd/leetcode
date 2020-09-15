package leetcode.n_ary_tree.preorder;

import java.util.*;

class SolutionRecursive {
  private List<Integer> output = new LinkedList<>();

  public List<Integer> preorder(Node root) {

    helper(root);

    return output;
  }

  public void helper(Node node) {
    if (node == null)
      return;

    output.add(node.val);
    for (Node child : node.children) {
      helper(child);
    }
  }
}