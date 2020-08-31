
class Solution {
    fun productExceptSelf(nums: IntArray): IntArray {
      var size = nums.size
      var left = IntArray(size)

      // println("nums: " + nums.joinToString())

      // left[i] is the product of everything left of nums[i]
      left[0] = 1
      for (i in 1..size - 1) {
        left[i] = left[i - 1] * nums[i - 1]
      }
      // println("left: " + left.joinToString())

      // right[i] is the product of everything right of nums[i]
      var right = IntArray(size)
      right[size - 1] = 1
      for (i in (size - 2) downTo 0) {
        right[i] = right[i + 1] * nums[i + 1]
      }
      // println("right: " + right.joinToString())

      var ret = IntArray(nums.size)
      for (i in 0..size - 1) {
        ret[i] = left[i] * right[i]
      }
      // println("ret: " + ret.joinToString())

      return ret
    }
}

fun main() {
  var solution = Solution()

  var res = solution.productExceptSelf(intArrayOf(1, 2, 3, 4))

  println("[24,12,8,6]: " + res.joinToString())
}
