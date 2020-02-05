package leetcode._coin_change_2;

import java.util.Arrays;

class Solution {

    public int change(int amount, int[] coins) {
        if (amount == 0)
            return 0;

        Arrays.sort(coins);

        int[] dp = new int[amount + 1];

        for (int amt = 1; amt <= amount; amt++) {
            for (int coinIndex = 0; coinIndex < coins.length; coinIndex++) {
                int coin = coins[coinIndex];

                if (coin > amt)
                    continue;

                /**
                 * 
                 * algorithm:
                 * 
                 * if remainder is 0, new combo was found
                 * 
                 * if remainder subproblem solution is 0, no solution found if remainder
                 * subproblem is >0, use that for amount, if multiple subproblems are >0, ??
                 * 
                 * e.g. coins = 1 and 2 amt X = dp[] amt 0 = [ 0 ] amt 1 = [ 0 1 ] (coin 1 -
                 * zero remainder) amt 1 = [ 0 1 ] (coin 2, no solution) amt 2 = [ 0 1 1 ] (coin
                 * 1 - (use subproblem result) amt 2 = [ 0 1 2 ] (coin 2 - zero remainder) amt 3
                 * = [ 0 1 2 2 ] (coin 1 - use subproblem result) amt 3 = [ 0 1 2 2 ] (coin 2 -
                 * two subproblems, both same value (2))
                 * 
                 */

                if (amt - coin == 0) {
                    dp[amt]++;
                } else if (dp[amt - coin] > 0) {
                    dp[amt] = Math.max(dp[amt - coin], dp[amt]);
                }

                System.out.println("amt " + amt + " coin " + coin + " : " + Arrays.toString(dp));
            }

        }

        return dp[amount];
    }

    public static void main(String[] args) {

        // System.out.println("1,2,5 =5:" + new Solution().change(3, new int[] { 1, 2
        // }));
        System.out.println("" + new Solution().change(5, new int[] { 1, 2, 5 }));

        for (int i = 0; i <= 10; i++) {
            // System.out.println("" + i + ":" + new Solution().change(i, new int[] { 2, 5
            // }));
        }
    }

}