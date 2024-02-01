function divideArray(nums: number[], k: number): number[][] {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  const ans: number[][] = [];

  for (let i = 0; i < n; i += 3) {
    if (i + 2 < n && nums[i + 2] - nums[i] <= k)
      ans.push([nums[i], nums[i + 1], nums[i + 2]]);
    else return [];
  }

  return ans;
}
