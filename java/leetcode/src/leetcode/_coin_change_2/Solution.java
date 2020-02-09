package leetcode._coin_change_2;

class Solution {

    public int change(int amount, int[] coins) {
        int[] dp = new int[amount + 1];
        dp[0] = 1;

        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] = dp[i] + dp[i - coin];
                // System.out.println(coin + " : " + i + " " + Arrays.toString(dp));
            }
        }

        return dp[amount];
    }

    public static void main(String[] args) {
        System.out.println("" + new Solution().change(5, new int[] { 1, 2, 5 }));
    }
}