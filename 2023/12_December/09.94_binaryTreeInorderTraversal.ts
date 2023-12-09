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

function inorderTraversal(root: TreeNode | null): number[] {
  let nums: number[] = [];

  if (!root) return nums;

  const { val, left, right } = root;

  if (left) inorderTraversal(left).forEach((n) => nums.push(n));

  nums.push(val);

  if (right) inorderTraversal(right).forEach((n) => nums.push(n));

  return nums;
}
