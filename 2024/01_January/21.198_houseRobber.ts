function rob(nums: number[]): number {
  if (nums.length == 0) return 0;
  let a = 0,
    b = 0;
  for (const num of nums) {
    let temp = a;
    a = Math.max(b + num, a);
    b = temp;
  }
  return a;
}
