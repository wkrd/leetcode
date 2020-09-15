package leetcode.asteroid_collision;

import java.util.*;

class Solution {

    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> stack = new Stack<>();
        for (int a : asteroids) {

            if (a > 0) {
                stack.push(a);
            } else {
                while (true) {
                    if (stack.isEmpty()) {
                        stack.push(a);
                        break;
                    }
                    int prev = stack.peek();
                    if (prev < 0) {
                        stack.push(a); // we know already there's nothing in the way
                        break;
                    }
                    int result = prev + a;
                    if (result == 0) {
                        stack.pop(); // prev and current blown up
                        break;
                    } else if (result < 0) {
                        stack.pop(); // prev blown up
                    } else
                        break; // current is blown up
                }

            }

        }
        return stack.stream().mapToInt(x -> x).toArray();
    }

    public static void main(String[] args) {
        // System.out.println(Arrays.toString(new Solution().asteroidCollision(new int[]
        // { 10, 5, 3, -5 })));
        System.out.println(Arrays.toString(new Solution().asteroidCollision(new int[] { -2, -1, 1, 2 })));

    }
}