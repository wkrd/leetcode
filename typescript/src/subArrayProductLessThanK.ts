function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let product = 1
  let total = 0
  let i = 0
  let j = 0

  while (i < nums.length) {
    const v = nums[i]
    if (v <= 0) throw new Error('v <= 0')

    if (v >= k) {
      i++
      j = i
      continue
    }
    product = product * nums[i]

    // move j until product is less than k
    while (product >= k && j < i) {
      product = product / nums[j++]
    }

    i++
    total += i - j // add number of sub arrays

    //console.table({ i, j, v, product, total })
  }

  return total
}

console.log('8=' + numSubarrayProductLessThanK([10, 5, 2, 6], 100))

console.log('0=' + numSubarrayProductLessThanK([1, 2, 3], 0))

export {}
