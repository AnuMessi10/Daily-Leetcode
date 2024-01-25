function longestCommonSubsequence(t1: string, t2: string): number {
  const t: number[][] = new Array(1001);

  for (let i = 0, a = t1.length; i < a; i++)
    t[i] = new Array(t2.length).fill(-1);

  const solve = (x: string, y: string, m: number, n: number) => {
    if (m === 0 || n === 0) return 0;

    if (t[m - 1][n - 1] !== -1) return t[m - 1][n - 1];

    if (x[m - 1] === y[n - 1])
      return (t[m - 1][n - 1] = 1 + solve(x, y, m - 1, n - 1));

    return (t[m - 1][n - 1] = Math.max(
      solve(x, y, m - 1, n),
      solve(x, y, m, n - 1)
    ));
  };

  return solve(t1, t2, t1.length, t2.length);
}
