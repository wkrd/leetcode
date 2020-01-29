package leetcode.recursion_to_iteration.btree_inorder_traversal;

import java.util.*;

class SolutionRecursive {

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

    private List<Integer> values = new LinkedList<>();

    private void traverse(TreeNode node) {
        if (node == null)
            return;

        traverse(node.left);
        values.add(node.val);
        traverse(node.right);
    }

    public List<Integer> inorderTraversal(TreeNode root) {
        traverse(root);
        return values;
    }
}