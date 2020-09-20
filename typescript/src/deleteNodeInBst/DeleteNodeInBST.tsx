import React, { useReducer, useState, useMemo } from 'react'
import { TreeNode, deleteNode } from './deleteNodeInBstCode'

type TreeNodeWithPosition = TreeNode & { level: number; offset: number }

type Props = {
  root: TreeNode | null
  key: number
}
export const DeleteNodeInBst: React.FC<Props> = ({ root }) => {
  const [valToDelete, setValToDelete] = useState<string>('10')
  const [bstRoot, setBstRoot] = useState<TreeNode | null>(root)

  const q: TreeNodeWithPosition[] = []
  root && q.push({ ...root, level: 1, offset: 0 })

  const svgElements: React.ReactElement[] = []

  // bfs with level, offset
  while (q.length) {
    const width = q.length

    for (let x = 0; x < width; x++) {
      const node = q.shift()!
      svgElements.push(
        <g
          transform={`translate(
              ${250 + node.offset}, ${25 + node.level * 50}
            )`}
        >
          <circle r={15} stroke="black" fill="none" />
          <text alignmentBaseline="central" textAnchor="middle">
            {node.val}
          </text>
          {node.left && (
            <line x1="-15" y1="15" x2="-25" y2="25" stroke="black" />
          )}
          {node.right && (
            <line x1="15" y1="15" x2="25" y2="25" stroke="black" />
          )}
        </g>
      )
      if (node.left) {
        q.push({
          ...node.left,
          level: node.level + 1,
          offset: node.offset - 100 / node.level,
        })
      }
      if (node.right) {
        q.push({
          ...node.right,
          level: node.level + 1,
          offset: node.offset + 100 / node.level,
        })
      }
    }
  }

  return (
    <div>
      <svg height={500} width={500}>
        {svgElements}
      </svg>
      <div></div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const val = parseInt(valToDelete, 10)
          if (isNaN(val)) return

          deleteNode(root, val)
        }}
      >
        <input
          type="number"
          required
          value={valToDelete}
          onChange={(e) => setValToDelete(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>

      <button type="button">Next</button>
      <button type="button">Play</button>
      <button type="button">Prev</button>
    </div>
  )
}
