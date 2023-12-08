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

function tree2str({ left, right, val }: TreeNode | null): string {
  // If no children, return the value
  if (!left && !right) return val.toString();

  // If no left child present, add value, empty parenthesis and right child
  if (!left && right) return `${val}()(${tree2str(right)})`;

  // If no right child present, add value and left child
  if (left && !right) return `${val}(${tree2str(left)})`;

  // If both children are present, proceed normally
  return `${val}(${tree2str(left)})(${tree2str(right)})`;
}
