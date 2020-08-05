package leetcode.challenges._2020_07_22_add_digits;

class Solution {
  public int addDigits(int num) {
    if(num < 10) return num;
    int sum = 0;

    while(num > 0) {
      int digit = num % 10;

      sum += digit;

      num = num / 10;
    }
    return addDigits(sum);
  }

  public static void main(String[] args) {
    System.out.println(new Solution().addDigits(38));
  }
}