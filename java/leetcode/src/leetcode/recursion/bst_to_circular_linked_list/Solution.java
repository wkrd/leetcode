package leetcode.recursion.bst_to_circular_linked_list;

// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;

    public Node() {
    }

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right) {
        val = _val;
        left = _left;
        right = _right;
    }
};

public class Solution {
    Node head;
    Node tail;

    public Node treeToDoublyList(Node root) {
        if (root == null)
            return null;

        helper(root);

        head.left = tail;
        tail.right = head;

        return head;
    }

    public void helper(Node node) {
        if (node == null)
            return;

        // bst in-order traversal:
        // traverse(node.left)
        // visit(node)
        // traverse(node.right)
        helper(node.left);

        if (head == null)
            head = node;

        if (tail != null) {
            // System.out.println("prev " + prev.val);
            tail.right = node;
            node.left = tail;
        }
        tail = node;

        helper(node.right);
    }

    public static void main(String[] args) {
        Node root = new Node(4);
        root.left = new Node(2);
        root.right = new Node(5);
        root.left.left = new Node(1);
        root.left.right = new Node(3);

        Node node = new Solution().treeToDoublyList(root);

        for (int i = 0; i < 10; i++) {
            if (node == null)
                return;

            System.out.println(node.val + ",");
            node = node.right;
        }
    }
}