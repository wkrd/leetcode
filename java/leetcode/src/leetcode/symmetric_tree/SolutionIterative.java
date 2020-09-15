package leetcode.symmetric_tree;

import java.util.Stack;

//  Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

class SolutionIterative {
    public boolean isSymmetric(TreeNode root) {
        if (root == null)
            return true;

        Stack<TreeNode> leftStack = new Stack<>();
        Stack<TreeNode> rightStack = new Stack<>();

        leftStack.push(root.left);
        rightStack.push(root.right);

        while (true) {
            if (leftStack.isEmpty() && rightStack.isEmpty())
                return true;

            if (leftStack.isEmpty() ^ rightStack.isEmpty())
                return false;

            TreeNode left = leftStack.pop();
            TreeNode right = rightStack.pop();

            if (left == null && right == null)
                continue;

            if (left == null ^ right == null)
                return false;

            if (left.val != right.val)
                return false;

            // outter
            leftStack.add(left.left);
            rightStack.add(right.right);

            // inner
            leftStack.add(left.right);
            rightStack.add(right.left);
        }
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.right.left = new TreeNode(3);

        var res = new SolutionIterative().isSymmetric(root);
        System.out.println(res);
    }

}
