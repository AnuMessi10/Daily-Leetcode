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

function maxAncestorDiff(root: TreeNode | null): number {
    let maxDiff = -Infinity;

    function maxMin(root: TreeNode | null, max: number, min: number) {
        if (!root) {
            maxDiff = Math.max(maxDiff, max - min);
            return;
        }

        const { left, right, val } = root;

        max = Math.max(max, val);
        min = Math.min(min, val);

        maxMin(left, max, min);
        maxMin(right, max, min);
    }

    maxMin(root, root.val, root.val);

    return maxDiff;
};