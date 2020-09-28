// a / b = 2.0
// b / c = 3.0

// a = 2b
// b = 3c
// b = a/2
// c = b/3

// Q: a / c =  (2b / (b/3)) = 2 / (1/3) = 6

class Edge {
  constructor(public readonly ratio: number, public readonly to: Nod) {}
}
class Nod {
  constructor(
    public readonly name: string,
    public readonly edges = new Map<string, Edge>()
  ) {}
}

function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const nodes = new Map<string, Nod>()
  const N = equations.length

  // build graph
  for (let i = 0; i < N; i++) {
    const [a, b] = equations[i]
    const v = values[i]

    nodes.set(a, nodes.get(a) ?? new Nod(a))
    nodes.set(b, nodes.get(b) ?? new Nod(b))
    const nodeA = nodes.get(a)!
    const nodeB = nodes.get(b)!
    nodeA.edges.set(b, new Edge(v, nodeB))
    nodeB.edges.set(a, new Edge(1 / v, nodeA))
  }

  const answers: number[] = []
  for (const [a, b] of queries) {
    if (!nodes.has(a) || !nodes.has(b)) {
      answers.push(-1)
      continue
    }
    const seen = new Set<Nod>()
    let found = false

    const q: [[Nod, number]] = [[nodes.get(a)!, 1]]

    while (q.length) {
      const [node, factor] = q.pop()!
      if (node.name === b) {
        found = true
        answers.push(factor)
        break
      }
      seen.add(node)

      for (const [v, e] of node.edges.entries()) {
        if (!seen.has(e.to)) q.push([e.to, factor * e.ratio])
      }

      seen.add(node)
    }

    if (!found) answers.push(-1)
  }

  return answers
}

console.log(
  '[6.0, 0.5, -1.0, 1.0, -1.0 ]=' +
    calcEquation(
      [
        ['a', 'b'],
        ['b', 'c'],
      ],
      [2.0, 3.0],
      [
        ['a', 'c'],
        ['b', 'a'],
        ['a', 'e'],
        ['a', 'a'],
        ['x', 'x'],
      ]
    )
)

export {}
