type RC = { row: number; col: number };

const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function hasPath(
  maze: number[][],
  start: number[],
  destination: number[]
): boolean {
  const [startRow, startCol] = start;
  const [destRow, destCol] = destination;

  const visited: boolean[][] = maze.map((row) => []);
  const q: RC[] = [];

  q.push({ row: startRow, col: startCol });

  const moveUntilWall = (
    row: number,
    col: number,
    rowOffset: number,
    colOffset: number
  ): RC | null => {
    let rc: RC | null = null;
    let r = row + rowOffset;
    let c = col + colOffset;
    while (((maze[r] && maze[r][c]) ?? 1) === 0) {
      rc = { row: r, col: c };
      r += rowOffset;
      c += colOffset;
    }
    // console.log('moving...' + rc);
    return rc;
  };

  while (q.length) {
    const { row, col } = q.shift()!;
    // console.log(`visiting ${row} ${col} `);
    if (destRow === row && destCol === col) return true;

    visited[row][col] = true;
    DIRECTIONS.forEach(([r, c]) => {
      const node = moveUntilWall(row, col, r, c);
      if (node) {
        if (!visited[node.row][node.col]) q.push(node);
      }
    });
  }

  return false;
}

const maze1 = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
];

console.log('true ' + hasPath(maze1, [0, 4], [3, 2]));

console.log('false' + hasPath(maze1, [0, 4], [1, 1]));

// console.log(hasPath(maze1, [0, 4], [3, 2]))
