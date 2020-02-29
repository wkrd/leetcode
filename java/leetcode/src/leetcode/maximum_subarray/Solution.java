package leetcode.maximum_subarray;

class Solution {

    public int maxSubArray(int[] nums) {
        int sum = 0;
        int max = nums[0];

        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];

            sum = sum > 0 ? (sum + n) : n;
            max = Math.max(max, sum);

        }

        return max;
    }

}