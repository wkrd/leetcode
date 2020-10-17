class TrieNode {
  constructor(
    public children = new Map<string, TrieNode>(),
    public count = 0
  ) {}
  increment() {
    this.count++
  }
}

function findRepeatedDnaSequences(s: string): string[] {
  let res: string[] = []

  // TODO: trie not needed, just use a hashset
  const root = new TrieNode()

  for (let i = 0; i < s.length - 9; i++) {
    let n = root
    for (let depth = 0; depth < 10; depth++) {
      const c = s[i + depth]

      if (!c) throw new Error('index out of range')

      if (!n.children.has(c)) {
        n.children.set(c, new TrieNode())
      }
      n = n.children.get(c)!
      n.increment()

      //console.log('testing', s.substring(i, i + depth + 1))

      if (depth === 9 && n.count === 2) {
        console.log(i, i + 10)

        res.push(s.substring(i, i + 10))
      }
    }
  }

  console.log(root)

  return res
}

console.log(
  '"AAAAACCCCC","CCCCCAAAAA"]=' +
    findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')
)

console.log(findRepeatedDnaSequences('AAAAAAAAAAA')) // len: 11

/*
AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT
*/
export {}
