function findMatrix(nums: number[]): number[][] {
  let freq: number[] = new Array(nums.length + 1).fill(0),
    ans: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (freq[num] >= ans.length) ans.push([num]);
    else ans[freq[num]].push(num);

    freq[num]++;
  }

  return ans;
}
