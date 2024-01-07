function numberOfArithmeticSlices(nums: number[]): number {
  const n = nums.length;
  let totalCount = 0;

  const dp: Map<number, number>[] = new Array(n);

  for (let i = 0; i < n; i++) {
    dp[i] = new Map<number, number>();

    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];

      const prevCount = dp[j].get(diff) ?? 0;

      dp[i].set(diff, (dp[i].get(diff) ?? 0) + prevCount + 1);

      totalCount += prevCount;
    }
  }

  return totalCount;
}
