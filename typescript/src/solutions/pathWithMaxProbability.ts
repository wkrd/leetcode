class Node {
  constructor(public edges = new Map<number, number>()) {}
}

function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start: number,
  end: number
): number {
  // initialize graph
  const graph: Node[] = new Array(n)
  for (let i = 0; i < n; i++) {
    graph[i] = new Node()
  }
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i]
    const prob = succProb[i]
    graph[from].edges.set(to, prob)
    graph[to].edges.set(from, prob)
  }

  // naive dijkstra (sort instead of priority queue / maxheap)
  const q = [[start, 1]]
  const visited = new Set<number>()
  while (q.length) {
    const [nodeIndex, nodeProbability] = q.shift()!
    visited.add(nodeIndex)

    if (nodeIndex === end) {
      return nodeProbability
    }
    for (const [toIndex, toProbability] of graph[nodeIndex].edges.entries()) {
      if (!visited.has(toIndex)) {
        q.push([toIndex, nodeProbability * toProbability])
      }
    }
    q.sort((a, b) => b[1] - a[1]) // sort by probability, desc
  }
  return 0
}

console.log(
  maxProbability(
    3,
    [
      [0, 1],
      [1, 2],
      [0, 2],
    ],
    [0.5, 0.5, 0.2],
    0,
    2
  )
)

console.log(
  maxProbability(
    5,
    [
      [1, 4],
      [2, 4],
      [0, 4],
      [0, 3],
      [0, 2],
      [2, 3],
    ],
    [0.37, 0.17, 0.93, 0.23, 0.39, 0.04],
    3,
    4
  )
)

export {}
