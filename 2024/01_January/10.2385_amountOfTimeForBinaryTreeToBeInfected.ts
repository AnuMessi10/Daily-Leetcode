/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function amountOfTime(root: TreeNode | null, start: number): number {
  let result = 0;

  function depthFinder(root: TreeNode | null, start: number): number {
    if (root == null) return 0;

    const { left, val, right } = root;

    let leftDepth = depthFinder(left, start);
    let rightDepth = depthFinder(right, start);

    if (val === start) {
      result = Math.max(leftDepth, rightDepth);
      return -1;
    } else if (leftDepth >= 0 && rightDepth >= 0)
      return 1 + Math.max(leftDepth, rightDepth);

    result = Math.max(result, Math.abs(leftDepth - rightDepth));

    return Math.min(leftDepth, rightDepth) - 1;
  }

  depthFinder(root, start);

  return result;
}
