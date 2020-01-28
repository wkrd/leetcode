package leetcode.recursion_to_iteration.btree_levelorder_traversal;

import java.util.*;

/**
 * Definition for a binary tree node.
 */
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    List<List<Integer>> list = new ArrayList<>(); // ArrayList for O(1) lookup

    public List<List<Integer>> levelOrder(TreeNode root) {
        helper(root, 0);

        return list;
    }

    private void helper(TreeNode node, int level) {
        if (node == null)
            return;

        if (list.size() - 1 < level) {
            list.add(new LinkedList<>());
        }
        list.get(level).add(node.val);

        helper(node.left, level + 1);
        helper(node.right, level + 1);

    }
}
