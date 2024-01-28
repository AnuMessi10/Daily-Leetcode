function numSubmatrixSumTarget(matrix: number[][], target: number): number {
    let m = matrix.length, n = matrix[0].length;
    for (let row of matrix) {
        for (let i = 0; i < n - 1; i++) {
            row[i + 1] += row[i];
        }
    }
    let t = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let c: { [key: number]: number } = { 0: 1 }, acc = 0;
            for (let k = 0; k < m; k++) {
                if (i > 0) {
                    matrix[k][j] -= matrix[k][i - 1];
                }
                acc += matrix[k][j];
                t += (c[acc - target] || 0);
                c[acc] = (c[acc] || 0) + 1;
            }
        }
    }
    return t;
};