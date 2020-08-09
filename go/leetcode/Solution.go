package main

import (
	"fmt"
	"math"
)

// TreeNode - Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func closestValue(node *TreeNode, target float64) int {
	var diff = target - float64(node.Val)

	var subTree = node.Left
	if diff > 0 {
		subTree = node.Right
	}

	if subTree != nil {
		var closestSubtreeValue = closestValue(subTree, target)

		if math.Abs(target-float64(closestSubtreeValue)) < math.Abs(diff) {
			return closestSubtreeValue
		}
	}

	return node.Val
}

func main() {
	var root = TreeNode{Val: 50, Left: &TreeNode{Val: 25}}
	root.Val = 50
	var ret = closestValue(&root, 26)

	fmt.Print(ret)
}
