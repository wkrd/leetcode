import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { DeleteNodeInBst } from './DeleteNodeInBST'
import { TreeNode } from './deleteNodeInBstCode'

export default {
  title: 'Graphs/Delete Node in BST',
  component: DeleteNodeInBst,
} as Meta

const Template: Story<React.ComponentProps<typeof DeleteNodeInBst>> = (
  args
) => <DeleteNodeInBst {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  root: new TreeNode(
    100,
    new TreeNode(
      50,
      new TreeNode(25, null, new TreeNode(30)),
      new TreeNode(75, new TreeNode(74), new TreeNode(80))
    ),
    new TreeNode(150)
  ),
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  root: null,
}
