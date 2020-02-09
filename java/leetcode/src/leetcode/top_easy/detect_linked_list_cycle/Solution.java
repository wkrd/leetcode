package leetcode.top_easy.detect_linked_list_cycle;

class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
        next = null;
    }
}

public class Solution {
    public boolean hasCycle(ListNode head) {
        // we can use fast/slow ptr to get O(1) space complexity.
        // the two runners will eventually meet each other if they are running
        ListNode slow = head;
        ListNode fast = head;

        while (true) {
            if (fast == null || fast.next == null)
                return false;

            fast = fast.next;
            if (slow == fast) {
                return true;
            }
            fast = fast.next;
            slow = slow.next;
        }
    }
}