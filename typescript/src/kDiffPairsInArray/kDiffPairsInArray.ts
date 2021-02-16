function findPairs(nums: number[], k: number): number {
  let result = 0

  const counts = new Map<number, number>()

  for (const n of nums) {
    counts.set(n, (counts.get(n) ?? 0) + 1)
  }
  //console.log(counts)

  for (const [n, count] of counts.entries()) {
    if (k === 0) {
      if (count >= 2) result++
    } else {
      if (counts.get(n + k)) result++
    }
  }

  return result
}

console.log(findPairs([1, 3, 1, 5, 4], 0))

// 3
// 1
// 4
// 1
// 5

// 1
// 1
// 3
// 4
// 5

// [1] =2

export {}
