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

func closestValueIterative(node *TreeNode, target float64) int {
	var closest = node.Val
	var closestDiff = target - float64(closest)

	for node != nil {
		var diff = target - float64(node.Val)

		if math.Abs(diff) < math.Abs(closestDiff) {
			closest = node.Val
			closestDiff = diff
		}

		if diff > 0 {
			node = node.Right
		} else {
			node = node.Left
		}
	}
	return closest
}

func closestValueRecursive(node *TreeNode, target float64) int {
	var diff = target - float64(node.Val)

	var subTree = node.Left
	if diff > 0 {
		subTree = node.Right
	}

	if subTree != nil {
		var closestSubtreeValue = closestValueRecursive(subTree, target)

		if math.Abs(target-float64(closestSubtreeValue)) < math.Abs(diff) {
			return closestSubtreeValue
		}
	}

	return node.Val
}

func main() {
	var root = TreeNode{Val: 50, Left: &TreeNode{Val: 25}}

	fmt.Print(closestValueIterative(&root, 26))
	fmt.Print(closestValueRecursive(&root, 26))
}
