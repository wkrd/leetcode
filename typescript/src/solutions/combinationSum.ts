function combinationSum(candidates: number[], target: number): number[][] {
  const results: number[][] = []

  candidates = candidates.sort((a, b) => a - b)

  const bt = (combo: number[], sum: number, candidatesIndex: number) => {
    // console.log('bt:', combo, sum)

    if (sum > target) {
      return
    } else if (sum === target) {
      results.push([...combo])
      return
    }

    for (let i = candidatesIndex; i < candidates.length; i++) {
      let n = candidates[i]

      sum += n
      combo.push(n)
      bt(combo, sum, i)
      sum -= n
      combo.pop()
    }
  }

  bt([], 0, 0)

  return results
}

console.log(
  '[[3,3,3,3,3],[3,3,3,6],[3,3,4,5],[3,3,9],[3,4,4,4],[3,4,8],[3,5,7],[3,6,6],[3,12],[4,4,7],[4,5,6],[4,11],[5,5,5],[6,9],[7,8]]',
  combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15)
)

console.log(
  '[[3,3,3,3,3],[3,3,3,6],[3,3,4,5],[3,3,9],[3,4,4,4],[3,4,8],[3,5,7],[3,6,6],[3,12],[4,4,7],[4,5,6],[4,11],[5,5,5],[6,9],[7,8]]',
  combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15)
)

export default {}
