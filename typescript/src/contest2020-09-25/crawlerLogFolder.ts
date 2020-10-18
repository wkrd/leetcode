function minOperations(logs: string[]): number {
  let depth = 0

  for (let log of logs) {
    if (log.startsWith('..')) {
      depth = Math.max(depth - 1, 0)
    } else if (log.startsWith('.')) {
    } else {
      depth++
    }
  }

  return depth
}

console.log('2=' + minOperations(['d1/', 'd2/', '../', 'd21/', './']))
