function climbStairs(n: number): number {
  let dp: number[] = new Array(n + 1);

  for (let i = 1; i <= n; ++i)
    if (i < 3) dp[i] = i;
    else dp[i] = dp[i - 1] + dp[i - 2];

  return dp[n];
}
