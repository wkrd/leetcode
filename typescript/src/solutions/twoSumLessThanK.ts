function twoSumLessThanK(A: number[], K: number): number {
  let maxSum: number | null = -1

  A = A.sort((a, b) => a - b)

  let lo = 0
  let hi = A.length - 1

  while (lo < hi) {
    const sum = A[lo] + A[hi]
    if (sum < K) {
      lo++
      maxSum = Math.max(maxSum, sum)
    } else {
      hi--
    }
  }

  return maxSum ?? -1
}

console.log('=' + twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60))

export {}
