function maxProduct(nums: number[]): number {
  let highest = -Infinity,
    secondHighest = -Infinity;
  for (const num of nums) {
    if (num >= highest) {
      secondHighest = highest;
      highest = num;
    } else if (num > secondHighest) {
      secondHighest = num;
    }
  }
  return (secondHighest - 1) * (highest - 1);
}
