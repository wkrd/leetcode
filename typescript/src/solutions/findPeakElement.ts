function findPeakElement(nums: number[]): number {
  const helper = (start: number, end: number): number => {
    const mid = (start + end) >> 1 // floor ( sum / 2 )

    let v = nums[mid]

    const before = nums[mid - 1] ?? -Infinity
    const after = nums[mid + 1] ?? -Infinity

    if (v < before) {
      return helper(start, mid - 1)
    }
    if (v < after) {
      return helper(mid + 1, end)
    }
    return mid
  }

  return helper(0, nums.length)
}

console.log('1 or 5:' + findPeakElement([1, 2, 1, 3, 5, 6, 4]))

export {}
