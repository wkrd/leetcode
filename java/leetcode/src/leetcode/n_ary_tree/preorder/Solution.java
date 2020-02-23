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

  public List<Integer> preorder(Node node) {
    if (node == null)
      return output;

    LinkedList<Node> queue = new LinkedList<>();
    queue.add(node);

    while (!queue.isEmpty()) {
      node = queue.removeFirst();
      output.add(node.val);

      Collections.reverse(node.children);
      for (Node child : node.children) {
        queue.addFirst(child);
      }
    }

    return output;
  }
}
