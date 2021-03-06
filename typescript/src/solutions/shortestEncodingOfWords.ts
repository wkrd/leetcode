class MyTrie {
  constructor(public children: Map<string, MyTrie> = new Map()) {}
}

function minimumLengthEncoding(words: string[]): number {
  if (!words.length) return 1

  const root = new MyTrie()

  for (let i = 0; i < words.length; i++) {
    const word = words[i].split('').reverse().join('')
    let node = root

    for (const c of word) {
      if (!node.children.has(c)) {
        node.children.set(c, new MyTrie())
      }
      node = node.children.get(c)!
    }
  }

  // dfs: calculate encoding length when we see a leaf
  const stack: [number, MyTrie][] = [[0, root]]

  let minEncodingLength = 0

  while (stack.length) {
    const [depth, node] = stack.pop()!

    if (node.children.size === 0) {
      minEncodingLength += depth + 1 // add 1 for '#' character
    }

    for (let child of node.children.values()) {
      stack.push([depth + 1, child])
    }
  }

  return minEncodingLength
}

console.log('10=' + minimumLengthEncoding(['time', 'me', 'bell']))
