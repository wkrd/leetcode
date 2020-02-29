package leetcode.happy_number;

class Solution {

    int getNext(int n) {
        int newN = 0;

        while (n != 0) {
            int digit = n % 10;
            newN += digit * digit;

            n /= 10;
        }

        return newN;
    }

    public boolean isHappy(int n) {
        int slow = n;
        int fast = getNext(slow);

        while (slow != 1 && fast != slow) {
            slow = getNext(slow);

            fast = getNext(fast);
            fast = getNext(fast);

        }
        return slow == 1;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().isHappy(19));
        System.out.println(new Solution().isHappy(2));
        System.out.println(new Solution().isHappy(-2));

    }
}
