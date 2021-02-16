function canAttendMeetings(intervals: number[][]): boolean {
  if (intervals.length <= 1) return true

  intervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]

    return a[0] - b[0]
  })

  // console.log(intervals)

  let prev = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i]
    const [start] = intervals[i]
    const [, prevEnd] = prev

    if (start < prevEnd) return false

    prev = current
  }

  return true
}

console.log(
  canAttendMeetings([
    [7, 10],
    [2, 4],
  ])
)

console.log(
  'false=' +
    canAttendMeetings([
      [15, 20],

      [0, 30],
      [5, 10],
    ])
)

export {}
