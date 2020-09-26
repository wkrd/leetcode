function unhappyFriends(
  n: number,
  preferences: number[][],
  pairs: number[][]
): number {
  const partnerLookup = new Array<number>(n)
  for (const [p1, p2] of pairs) {
    partnerLookup[p1] = p2
    partnerLookup[p2] = p1
  }

  const isHappy = (x: number) => {
    const y = partnerLookup[x]
    for (const u of preferences[x]) {
      if (u === y) return true

      const v = partnerLookup[u]
      if (preferences[u].indexOf(x) < preferences[u].indexOf(v)) return false
    }
    return false
  }

  let unhappy = 0
  for (let x = 0; x < n; x++) {
    if (!isHappy(x)) {
      unhappy++
    }
  }
  return unhappy
}

// test case 1:
{
  const preferences = [
    [1, 2, 3],
    [3, 2, 0],
    [3, 1, 0],
    [1, 2, 0],
  ]
  const pairs = [
    [0, 1],
    [2, 3],
  ]
  console.log('2 =  ' + unhappyFriends(preferences.length, preferences, pairs))
}

export {}
