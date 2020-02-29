package leetcode.n_ary_tree.findmaxdepth;

class SolutionRecursive {
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