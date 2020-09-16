// Note: LeetCode only supports JS for this question

/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function (node) {
  // successor is either the farthest left in right subtree, or the first parent on the right side

  // get minimum in right subtree
  let search = node.right
  while (search && search.left) search = search.left
  if (search) return search

  // or go back up
  search = node.parent
  let prevSearch = node
  while (search) {
    if (search.right === prevSearch) {
      prevSearch = search
      search = search.parent
      // console.log("search", search.val);
    } else break
  }

  return search || null
}
