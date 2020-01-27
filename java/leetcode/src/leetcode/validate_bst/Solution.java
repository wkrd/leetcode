package leetcode.validate_bst;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

class Solution {
    public boolean isValidBST(TreeNode root) {
        if (root == null)
            return true;

        return validate(root.left, Long.MIN_VALUE, root.val) && validate(root.right, root.val, Long.MAX_VALUE);
    }

    public boolean validate(TreeNode node, long min, long max) {
        // System.out.print(" " + min);
        // System.out.print(" " + max);
        // System.out.println("");

        if (node == null)
            return true;

        if (node.val <= min)
            return false;
        if (node.val >= max)
            return false;

        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }

    public static void main(String[] args) {

        TreeNode r = new TreeNode(2);
        r.left = new TreeNode(1);
        r.right = new TreeNode(13);

        System.out.println(new Solution().isValidBST(r));
        System.out.println(new Solution().isValidBST(null));
    }
}
