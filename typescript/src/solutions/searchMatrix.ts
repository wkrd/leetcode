function searchMatrix(matrix: number[][], target: number): boolean {
  if (!matrix.length || !matrix[0].length) return false

  let L = 0
  let R = matrix.length

  // leftmost
  while (L < R) {
    let mid = (L + R) >> 1 // floor of half
    let n = matrix[mid][0]

    if (n === target) return true

    if (target > n) {
      L = mid + 1
    } else {
      R = mid
    }
  }

  if (L === 0) return false
  L = L - 1

  let l = 0
  let r = matrix[0].length - 1

  while (l <= r) {
    let mid = (l + r) >> 1
    let v = matrix[L][mid]

    if (v > target) {
      r = mid - 1
    } else if (v < target) {
      l = mid + 1
    } else {
      console.log(v)

      return true
    }
  }

  return false
}

const m = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
]

console.log('true' + searchMatrix(m, 3))
console.log('true' + searchMatrix(m, 11))
console.log('true' + searchMatrix(m, 50))

console.log('false' + searchMatrix(m, 0))
console.log('false' + searchMatrix(m, 12))
console.log('false' + searchMatrix(m, 51))

console.log('true' + searchMatrix([[0]], 0))

export {}
