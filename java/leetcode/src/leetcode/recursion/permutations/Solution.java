package leetcode.recursion.permutations;

import java.util.*;

class Solution {
    List<List<Integer>> permutations = new LinkedList<>();

    public List<List<Integer>> permute(int[] nums) {
        backtrack(nums, new LinkedHashSet<Integer>(), nums.length);
        return permutations;
    }

    private void backtrack(int[] nums, LinkedHashSet<Integer> solution, int current) {
        if (solution.size() == nums.length) {
            permutations.add(new ArrayList<>(solution));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            if (!solution.contains(n)) {
                solution.add(n);
                backtrack(nums, solution, current + 1);
                solution.remove(n);
            }
        }
    }

    public static void main(String[] args) {
        System.out.println(new Solution().permute(new int[] { 1, 2, 3 }));
    }
}
