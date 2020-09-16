import React from 'react'
import { TreeNode } from './deleteNodeInBstCode'
import * as D3 from './d3'

type Props = {
  root: TreeNode | null
  key: number
}
export const DeleteNodeInBst: React.FC<Props> = () => {
  return (
    <div>
      <button type="button">Next</button>
      <button type="button">Play</button>
      <button type="button">Prev</button>
    </div>
  )
}
