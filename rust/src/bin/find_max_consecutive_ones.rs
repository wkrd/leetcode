#!/usr/bin/env run-cargo-script

use std::cmp;

struct Solution {}

impl Solution {
    pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
        let mut max: i32 = 0;
        let mut cur: i32 = 0;

        for i in nums {
            if i == 1 {
                cur += 1;
                max = cmp::max(max, cur);
            } else {
                cur = 0;
            }
        }
        return max;
    }
}

fn main() {
    println!(
        "Expected 0: {}",
        Solution::find_max_consecutive_ones(vec![])
    );
    println!(
        "Expected 2: {}",
        Solution::find_max_consecutive_ones(vec![1, 0, 1, 1, 0, 1])
    );
    println!(
        "Expected 3: {}",
        Solution::find_max_consecutive_ones(vec![1, 1, 1, 0, 1, 1, 0])
    );
}
