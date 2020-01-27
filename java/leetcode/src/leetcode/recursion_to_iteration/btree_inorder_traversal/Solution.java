package leetcode.recursion_to_iteration.btree_inorder_traversal;

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

class Solution {

    private List<Integer> values = new LinkedList<>();

    private void traverse(TreeNode node) {
        if (node == null)
            return;

        if (node.left != null)
            traverse(node.left);

        values.add(node.val);

        if (node.right != null)
            traverse(node.right);
    }

    public List<Integer> inorderTraversal(TreeNode root) {
        traverse(root);
        return values;
    }

}