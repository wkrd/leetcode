#!/usr/bin/env run-cargo-script

struct Solution {}

fn flip( a: Vec<i32>, k: usize) -> Vec<i32> {
  // println!("flip: {:?}  {}", a, k);

  // todo: figure out rust borrowing, then use splice / iterators
  let mut n : Vec<i32> = Vec::new();
  for i in 0..a.len() {
    if i <= k  {
      n.insert(0, a[i]);
    }
    else {
      n.push(a[i]);
    }
  }
  return n;
}

impl Solution {
  pub fn pancake_sort(unsorted: Vec<i32>) -> Vec<i32> {
    // naive: find max value, and keep flipping it to the end

    let mut k : Vec<i32> = Vec::new();
    let mut a = unsorted;
    let mut countdown = a.len();

    while countdown > 0 {
      let mut max_index: usize = 0;
      for i in 0..countdown {
        if a[i] > a[max_index as usize] {
          max_index = i;
        }
      }

      a = flip(a, max_index);
      a = flip(a, countdown - 1);
      
      k.push(1 + max_index as i32);
      k.push(countdown as i32);
      
      countdown = countdown - 1;
    }

    return k;
  }
}

fn main() {
  println!(
    "Expected [4,2,1,3]: {:?}",
    flip(vec![1,2,4,3], 2)
  );

  println!(
      "Expected []: {:?}",
      Solution::pancake_sort(vec![])
  );
  println!(
      "Output: {:?}",
      Solution::pancake_sort(vec![3,2,4,1])
  );
}
