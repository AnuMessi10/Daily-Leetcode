function minFallingPathSum(matrix: number[][]): number {
    const n = matrix.length;
    if (n === 1) return matrix[0][0];
    for (let i = 0; i < n - 1; i++) {
        matrix[i + 1][0] += Math.min(matrix[i][0], matrix[i][1]);
        matrix[i + 1][n - 1] += Math.min(matrix[i][n - 1], matrix[i][n - 2]);
        for (let j = 1; j < n - 1; j++)
            matrix[i + 1][j] += Math.min(matrix[i][j - 1], matrix[i][j], matrix[i][j + 1]);
    }
    return matrix[n - 1].reduce((a, b) => a < b ? a : b);
};