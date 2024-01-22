function findErrorNums(nums: number[]): number[] {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2,
    s = new Set(nums);

  let actualSum = 0,
    setSum = 0;

  for (const num of nums) actualSum += num;

  for (const num of s) setSum += num;

  return [actualSum - setSum, expectedSum - setSum];
}
