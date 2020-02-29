package leetcode.sort_colors;

class Solution {

    // xor not needed, just for fun/practice
    private void xorSwap(int[] nums, int i, int j) {
        if (i == j)
            return;
        nums[i] ^= nums[j];
        nums[j] ^= nums[i];
        nums[i] ^= nums[j];
    }

    public void sortColors(int[] nums) {
        int start = 0, curr = 0;
        int end = nums.length - 1;

        while (start < end && nums[start] == 0)
            start++;

        while (end >= start && nums[end] == 2)
            end--;

        curr = start;

        while (curr <= end) {
            int n = nums[curr];

            if (n == 0) {
                xorSwap(nums, start, curr);
                start++;
                curr++;
            } else if (n == 1) {
                curr++;
            } else { // n == 2
                xorSwap(nums, curr, end);
                end--;
            }

            // System.out.println(Arrays.toString(nums));
            // System.out.printf("%d %d %d\n\n", start, curr, end);
        }
    }

    public static void main(String[] args) {
        new Solution().sortColors(new int[] { 2, 2, 0 });
    }
}
