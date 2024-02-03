function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n = arr.length;
  const dp: number[] = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 1; j <= k && i - j + 1 >= 0; j++) {
      max = Math.max(max, arr[i - j + 1]);
      dp[i] = Math.max(dp[i], (i >= j ? dp[i - j] : 0) + max * j);
    }
  }

  return dp[n - 1];
}
