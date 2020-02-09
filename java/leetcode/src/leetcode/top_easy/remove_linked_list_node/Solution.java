package leetcode.top_easy.remove_linked_list_node;

class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
    }
}

class Solution {
    public void deleteNode(ListNode node) {
        if (node.next == null)
            throw new IllegalArgumentException("cannot deleteNode on tail");

        // we can't visit the previous node, so we can only change values so it appears
        // it has been removed
        node.val = node.next.val;
        node.next = node.next.next;
    }

    public static void main(String[] args) {
        ListNode node = new ListNode(10);
        node.next = new ListNode(12);
        node.next = new ListNode(12);

        new Solution().deleteNode(node);

        System.out.println(node.val);
    }
}
