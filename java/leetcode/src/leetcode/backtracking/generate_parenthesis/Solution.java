package leetcode.backtracking.generate_parenthesis;

import java.util.*;

class Solution {
    List<String> output = new LinkedList<>();

    /**
     * 
     * @param n Number of bracket pairs
     * @return All valid combinations of brackets
     */
    public List<String> generateParenthesis(int n) {
        backtrack(new StringBuilder(), n, n);
        return output;
    }

    /**
     * 
     * <pre>
     *   Generic backtrack template:
     * 
     *   backtrack(input):
     *     if solution(input)
     *       output(input)
     * 
     *     for candidate in list_of_candidates:
     *       if valid(candidate)
     *         add(candidate)
     *         backtrack(input)
     *         remove(candidate)
     * 
     * </pre>
     */
    public void backtrack(StringBuilder s, int openBrackets, int closedBrackets) {
        if (openBrackets == 0 && closedBrackets == 0) {
            output.add(s.toString());
            return;
        }

        if (openBrackets > 0) {
            s.append("(");
            backtrack(s, openBrackets - 1, closedBrackets);
            s.deleteCharAt(s.length() - 1);
        }

        if (closedBrackets > 0 && closedBrackets > openBrackets) {
            s.append(")");
            backtrack(s, openBrackets, closedBrackets - 1);
            s.deleteCharAt(s.length() - 1);
        }
    }

    public static void main(String[] args) {
        System.out.println(new Solution().generateParenthesis(5));
    }
}
