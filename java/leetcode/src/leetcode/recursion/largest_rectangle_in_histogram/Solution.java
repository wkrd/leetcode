package leetcode.recursion.largest_rectangle_in_histogram;

class Solution {
    private int maxArea = 0;

    public int largestRectangleArea(int[] heights) {
        dc(heights, 0, heights.length - 1);

        return maxArea;
    }

    public void dc(int[] heights, int left, int right) {
        if (left < 0 || right > heights.length - 1)
            return;
        if (left > right)
            return;

        int minHeightIndex = left;
        for (int i = left; i <= right; i++) {
            if (heights[i] < heights[minHeightIndex]) {
                minHeightIndex = i;
            }
        }

        int area = heights[minHeightIndex] * (1 + right - left);
        if (area > maxArea) {
            maxArea = area;
        }

        dc(heights, left, minHeightIndex - 1);
        dc(heights, minHeightIndex + 1, right);
    }

    public static void main(String[] args) {
        int area = new Solution().largestRectangleArea(new int[] { 4, 2 });

        System.out.println(area);
    }
}
