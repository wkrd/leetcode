package leetcode.n_ary_tree.preorder;

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

class Solution {

    public List<Integer> preorder(Node node) {
        List<Integer> result = new LinkedList<>();

        Queue<Node> queue = new LinkedList<>();

        queue.add(node);

        while (queue.size() > 0) {
            result.add(node.val);

            for (Node child : node.children) {
                queue.add(child);
            }

            node = queue.remove();
        }

        return result;
    }

    public List<Integer> preorderRecursive(Node root) {
        List<Integer> result = new LinkedList<>();

        traverse(result, root);

        return result;
    }

    private static void traverse(List<Integer> result, Node node) {
        if (node == null)
            return;

        result.add(node.val);

        for (Node child : node.children) {
            traverse(result, child);
        }

    }

    public static void main(String[] args) {

    }
}