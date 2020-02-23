package leetcode.n_ary_tree.findmaxdepth;

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
  private int maxDepth = 0;

  public int maxDepth(Node root) {
    helper(root, 1);

    return maxDepth;
  }

  private void helper(Node node, int level) {
    if (node == null)
      return;

    maxDepth = Math.max(level, maxDepth);

    for (Node child : node.children) {
      helper(child, level + 1);
    }

  }
}