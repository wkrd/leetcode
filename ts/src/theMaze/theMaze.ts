#!/usr/bin/env node

export function hasPath(
  maze: number[][],
  start: number[],
  destination: number[]
): boolean {
  const [startRow, startCol] = start;
  const [destROw, destCol] = destination;
  
  // TODO: 
  return false
}

const maze1 = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
]

console.log('true ' + hasPath(maze1, [0, 4], [3, 2]))

#console.log(hasPath(maze, [0, 4], [3, 2]))

#console.log(hasPath(maze, [0, 4], [3, 2]))
