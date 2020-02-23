package leetcode.n_ary_tree.preorder;

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