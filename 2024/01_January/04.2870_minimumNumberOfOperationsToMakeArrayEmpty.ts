function minOperations(nums: number[]): number {
  const numMap = new Map<number, number>();
  let ans = 0;

  for (const num of nums) numMap.set(num, (numMap.get(num) ?? 0) + 1);

  for (const value of numMap.values()) {
    if (value === 1) return -1;

    const rem = value % 3;

    if (rem === 0) ans += value / 3;
    else if (rem === 1) ans += 2 + (value - 4) / 3;
    else ans += 1 + (value - 2) / 3;
  }
  return ans;
}
