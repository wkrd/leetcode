package leetcode.recursion.phone_numbers_letter_combos;

import java.util.*;

class Solution {
    List<String> output = new LinkedList<>();

    public List<String> letterCombinations(String digits) {
        if (digits.length() > 0) {
            backtrack(digits, new StringBuilder(digits.length()));
        }
        return output;
    }

    private void backtrack(String digits, StringBuilder solution) {
        int position = solution.length();

        if (position == digits.length()) {
            output.add(solution.toString());
            return;
        }

        char number = digits.charAt(position);
        char[] letters = null;
        switch (number) {
        case '2':
            letters = new char[] { 'a', 'b', 'c' };
            break;
        case '3':
            letters = new char[] { 'd', 'e', 'f' };
            break;
        case '4':
            letters = new char[] { 'g', 'h', 'i' };
            break;
        case '5':
            letters = new char[] { 'j', 'k', 'l' };
            break;
        case '6':
            letters = new char[] { 'm', 'n', 'o' };
            break;
        case '7':
            letters = new char[] { 'p', 'q', 'r', 's' };
            break;
        case '8':
            letters = new char[] { 't', 'u', 'v' };
            break;
        case '9':
            letters = new char[] { 'w', 'x', 'y', 'z' };
            break;
        default:
            throw new IllegalArgumentException();
        }

        for (int i = 0; i < letters.length; i++) {
            char c = letters[i];

            solution.append(c);
            backtrack(digits, solution);
            solution.deleteCharAt(position);
        }

    }

    public static void main(String[] args) {
        System.out.println(new Solution().letterCombinations("223"));
    }
}