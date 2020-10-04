function maxDistance(arrays: number[][]): number {
  const [first] = arrays
  let min = first[0]
  let max = first[first.length - 1]
  let res = 0

  for (let i = 1; i < arrays.length; i++) {
    const prev = arrays[i - 1]
    const a = arrays[i]

    min = Math.min(prev[0], min)
    max = Math.max(prev[prev.length - 1], max)

    res = Math.max(res, Math.max(a[a.length - 1] - min, max - a[0]))
  }

  return res
}

console.log(
  '4=' +
    maxDistance([
      [1, 2, 3],
      [4, 5],
      [1, 2, 3],
    ])
)

console.log(
  '14=' +
    maxDistance([
      [-8, -7, -7, -5, 1, 1, 3, 4],
      [-2],
      [-10, -10, -7, 0, 1, 3],
      [2],
    ])
)

export {}
