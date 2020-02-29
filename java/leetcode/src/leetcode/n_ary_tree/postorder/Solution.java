
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

class Solution {

  private List<Integer> output = new LinkedList<>();

  public List<Integer> postorder(Node root) {
    if (root == null)
      return output;

    LinkedList<Node> queue = new LinkedList<>();
    queue.add(root);
    while (!queue.isEmpty()) {
      Node node = queue.pollLast();

      for (Node child : node.children) {
        queue.add(child);
      }

      output.add(0, node.val);
    }

    return output;
  }

  public static void main(String[] args) {

    List<Node> children = new LinkedList<>();
    Node root = new Node(1, children);
    children.add(new Node(2, new LinkedList<Node>() {
      private static final long serialVersionUID = -3231266486382418956L;

      {
        add(new Node(3));
      }
    }));

    for (Integer i : new Solution().postorder(root)) {
      System.out.println(i);
    }
  }
}
