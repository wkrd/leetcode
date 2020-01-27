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
    public List<Integer> inorderTraversal(TreeNode node) {
        List<Integer> values = new LinkedList<>();
        Stack<TreeNode> stack = new Stack<>();

        while (!stack.isEmpty() || node != null) {
            if (node != null) {
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                if (node != null) {
                    values.add(node.val);
                    node = node.right;
                }
            }
        }

        return values;
    }
}