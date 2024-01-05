function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const sub: number[] = [];

  for (const x of nums) {
    if (sub.length === 0 || sub[sub.length - 1] < x) {
      sub.push(x);
    } else {
      const it = lowerBound(sub, x);
      sub[it] = x;
    }
  }

  return sub.length;
}

function lowerBound(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}
