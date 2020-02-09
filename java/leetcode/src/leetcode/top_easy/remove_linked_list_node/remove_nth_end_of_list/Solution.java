package leetcode.top_easy.remove_linked_list_node.remove_nth_end_of_list;

class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
    }
}

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode node = head;
        ListNode beforeN = head;
        int count = 0;

        while (node != null) {
            // System.out.println(count + " " + node.val + " " + n);

            if (count > n) {
                beforeN = beforeN.next;
            }

            node = node.next;
            count++;
        }
        if (n > count)
            throw new IllegalArgumentException();

        if (n == count) {
            // removing first just changes the head
            return head.next;
        }

        // else we modify
        beforeN.next = beforeN.next == null ? null : beforeN.next.next;
        return head;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        ListNode newHead = new Solution().removeNthFromEnd(head, 2);

        System.out.println("Res");
        while (newHead != null) {
            System.out.println(newHead.val);
            newHead = newHead.next;
        }
    }
}