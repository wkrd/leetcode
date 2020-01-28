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
    List<List<Integer>> list = new LinkedList<>(); // ArrayList for O(1) lookup

    public List<List<Integer>> levelOrder(TreeNode node) {
        Queue<TreeNode> queue = new LinkedList<>();

        queue.add(node);
        while (!queue.isEmpty()) {
            List<Integer> levelList = new LinkedList<>();
            list.add(levelList);

            int size = queue.size();
            for (int i = 0; i < size; i++) {
                node = queue.remove();

                levelList.add(node.val);

                if (node.left != null)
                    queue.add(node.left);
                if (node.right != null)
                    queue.add(node.right);
            }

        }
        return list;
    }
}
