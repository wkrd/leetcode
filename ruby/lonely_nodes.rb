# frozen_string_literal: true

# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end

def helper(node, lonely)
  return if node.nil?

  if node.left.nil? ^ node.right.nil?
    lonely << (node.left.nil? ? node.right.val : node.left.val)
  end

  helper(node.left, lonely)
  helper(node.right, lonely)
end

# @param {TreeNode} root
# @return {Integer[]}
def get_lonely_nodes(root)
  lonely = []
  helper(root, lonely)
  lonely
end
