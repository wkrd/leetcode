package leetcode._472_backtrack_combos;

import java.util.*;

class Solution {
    List<List<Integer>> output = new LinkedList<>();

    public List<List<Integer>> combine(int n, int k) {
        backtrack(n, k, new LinkedList<>(), 1);
        return output;
    } 

    public void backtrack(int n, int k, LinkedList<Integer> combo, int num) {
        //System.out.println("bt" + combo.toString());
        if(combo.size() == k) {
            output.add(new ArrayList<>(combo));
            //System.out.println("COMBO" + combo.toString());
            return;
        }

        for(int i = num; i <= n; i++) {
            combo.add(i);
            //System.out.println("added" + combo.toString());

            backtrack(n, k, combo, i + 1);
            combo.removeLast();
        }
    }

    public static void main(String[] args) {
        System.out.println(new Solution().combine(4,2));
    }
}
