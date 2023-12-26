const numRollsToTarget = (n: number, k: number, target: number): number => {
  const MOD = 10 ** 9 + 7;

  const dp: number[] = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    const temp: number[] = new Array(target + 1).fill(0);

    for (let j = 1; j <= k; j++)
      for (let sum = j; sum <= target; sum++)
        temp[sum] = (temp[sum] + dp[sum - j]) % MOD;

    dp.splice(0, target + 1, ...temp);
  }

  return dp[target];
};
