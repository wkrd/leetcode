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

class LevelNode {
  public int level;
  public Node node;

  public LevelNode(int level, Node node) {
    this.level = level;
    this.node = node;
  }
}

class Solution {

  public int maxDepth(Node root) {
    if (root == null)
      return 0;

    int curDepth = 1;
    int maxDepth = 1;

    Stack<LevelNode> s = new Stack<>();
    s.add(new LevelNode(1, root));

    while (!s.isEmpty()) {
      LevelNode levelNode = s.pop();
      maxDepth = Math.max(curDepth, maxDepth);

      for (Node child : levelNode.node.children) {
        s.add(new LevelNode(levelNode.level + 1, child));
      }
      maxDepth = Math.max(maxDepth, levelNode.level);
    }

    return maxDepth;
  }
}