class TrieNode {
  constructor(public readonly children: Map<string, TrieNode> = new Map()) {}

  static fromWords(words: string[]): TrieNode {
    const root = new TrieNode()
    for (const word of words) {
      let node = root
      for (const letter of word) {
        if (!node.children.has(letter)) {
          node.children.set(letter, new TrieNode())
        }
        node = node.children.get(letter)!
      }
    }
    // this.printTrie(root)

    return root
  }

  static printTrie(trie: TrieNode) {
    const q: [string, TrieNode][] = [['', trie]]
    while (q.length) {
      const [prefix, node] = q.pop()!
      console.log(prefix)

      for (const [letter, child] of node.children.entries()) {
        q.push([prefix + letter, child])
      }
    }
  }
}

function wordSquares(words: string[]): string[][] {
  if (words.length === 0) return []

  const N = words[0].length
  const root = TrieNode.fromWords(words)

  const results: string[][] = []

  const backtrack = (square: string[]) => {
    console.log('backtrack: ', square)

    if (square.length === square[0].length) {
      console.log('solution found!')
      results.push([...square])
      return
    }

    let prefix: string[] = []
    let node = root
    for (let i = 0; i < square.length; i++) {
      const letter = square[i].charAt(square.length)
      if (!letter) throw new Error('letter undefined')

      if (node.children.has(letter)) {
        node = node.children.get(letter)!
        prefix.push(letter)
      } else {
        console.log('not found: ' + prefix)
        return
      }
    }
    console.log('prefix: ' + prefix)

    const q: [string, TrieNode][] = [[prefix.join(''), node]]

    // dfs starting at prefix for all candidate words
    while (q.length) {
      const [word, node] = q.pop()!
      console.log('dfs: ' + word + ' ' + word.length + '/' + N)

      if (word.length === N) {
        console.log('word: ' + word)
        square.push(word)
        backtrack(square)
        square.pop()
      }

      for (const [l, child] of node.children.entries()) {
        q.push([word + l, child])
      }
    }
  }

  for (const word of words) {
    console.log('CHECKING: ' + word)
    backtrack([word])
  }
  return results
}

console.log(
  '' +
    [
      ['wall', 'area', 'lead', 'lady'],
      ['ball', 'area', 'lead', 'lady'],
    ] +
    '=' +
    wordSquares(['area', 'lead', 'wall', 'lady', 'ball'])
)

/**
 * wall
 * area
 * lead
 * lady
 */
export {}
