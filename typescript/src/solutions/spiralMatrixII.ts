function generateMatrix(n: number): number[][] {
  const m: number[][] = Array(n)
  for (let i = 0; i < n; i++) {
    m[i] = new Array(n).fill(0)
  }

  let v = 1
  let row = 0
  let col = 0

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let dir = 0

  console.log('init', m)

  while (v <= n * n) {
    m[row][col] = v++

    const [rowOffset, colOffset] = dirs[dir]
    const R = m[row + rowOffset]

    if (!R || R[col + colOffset] !== 0) {
      dir = (dir + 1) % 4
    }
    row += dirs[dir][0]
    col += dirs[dir][1]
  }
  console.log(m, v)

  return m
}

generateMatrix(5)

export {}
