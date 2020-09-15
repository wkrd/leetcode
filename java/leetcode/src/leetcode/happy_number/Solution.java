package leetcode.happy_number;

import java.util.*;

class Solution {

    Set<Integer> seen = new HashSet<>();

    public boolean isHappy(int n) {
        if (n == 1)
            return true;

        if (seen.contains(n))
            return false;

        seen.add(n);

        Stack<Integer> digits = new Stack<>();
        int newN = 0;

        while (n != 0) {
            int digit = n % 10;
            digits.push(digit);
            newN += digit * digit;

            n /= 10;
        }

        return isHappy(newN);
    }

    public static void main(String[] args) {
        System.out.println(new Solution().isHappy(19));
        System.out.println(new Solution().isHappy(2));
        System.out.println(new Solution().isHappy(-2));

    }
}
