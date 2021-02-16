function minMeetingRooms(intervals: number[][]): number {
  intervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    return a[0] - b[0]
  })
  console.log(intervals)
  let minRooms = 0
  let inProg: number[][] = []

  for (let i of intervals) {
    // TODO: use priority queue for end times
    inProg = inProg.filter((j) => j[1] > i[0])

    inProg.push(i)
    minRooms = Math.max(minRooms, inProg.length)
  }

  return minRooms
}

// console.log(
//   '2=' +
//     minMeetingRooms([
//       [4, 9],
//       [4, 17],
//       [9, 10],
//     ])
// )

console.log(
  '2=' +
    minMeetingRooms([
      [0, 30],
      [5, 10],
      [15, 20],
    ])
)

console.log(
  '1=' +
    minMeetingRooms([
      [7, 10],
      [2, 4],
    ])
)

export {}
