function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const connections = new Array<number>(n).fill(0)
  for (let edge of edges) {
    const [, to] = edge
    connections[to] = connections[to] + 1
  }

  const result: number[] = []
  connections.forEach((count, index) => {
    if (count === 0) result.push(index)
  })
  return result
}

console.log(
  '[0,3]=',
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ])
)

console.log(
  '[0,2,3]=',
  findSmallestSetOfVertices(5, [
    [0, 1],
    [2, 1],
    [3, 1],
    [1, 4],
    [2, 4],
  ])
)
export {}
