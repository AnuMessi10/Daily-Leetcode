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

function treeSequence(root: TreeNode | null): number[] {
    if (!root) return [];

    const { left, right, val } = root;

    let s: number[] = [];

    if (left) s.push(...treeSequence(left));

    if (right) s.push(...treeSequence(right));

    if (!left && !right && val) s.push(val);

    return s;
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return JSON.stringify(treeSequence(root1)) === JSON.stringify(treeSequence(root2));
};