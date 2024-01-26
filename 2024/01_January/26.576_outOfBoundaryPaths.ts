function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number
): number {
  const states = [];

  for (let i = 0; i < m; i++) {
    states.push([]);
    for (let j = 0; j < n; j++) {
      states[i].push({});
    }
  }

  function dp(i, j, moves) {
    if (i < 0 || i >= m || j < 0 || j >= n) return 1;

    if (moves <= 0) return 0;

    if (states[i][j][moves] === undefined) {
      const t =
        dp(i + 1, j, moves - 1) +
        dp(i - 1, j, moves - 1) +
        dp(i, j + 1, moves - 1) +
        dp(i, j - 1, moves - 1);

      states[i][j][moves] = t % 1000000007;
    }

    return states[i][j][moves];
  }

  return dp(startRow, startColumn, maxMove);
}
