// intution:
// if facing a different direction at the end, we will be bounded
// if we arrive back at the start, we will be bounded

function isRobotBounded(instructions: string): boolean {
  let x = 0
  let y = 0
  let dir = 0 // N E S W

  for (let c of instructions) {
    if (c === 'L') {
      if (dir === 0) dir = 3
      else dir--
    } else if (c === 'R') {
      if (dir === 3) dir = 0
      else dir++
    } else {
      switch (dir) {
        case 0:
          y++
          break
        case 1:
          x++
          break
        case 2:
          y--
          break
        case 3:
          x--
      }
    }
  }
  if (dir !== 0) return true

  if (x === 0 && y === 0) return true

  return false
}

console.log('true=' + isRobotBounded('LL'))
console.log('true=' + isRobotBounded('GGLLGG'))
console.log('false=' + isRobotBounded('GG'))
console.log('true=' + isRobotBounded('GL'))
