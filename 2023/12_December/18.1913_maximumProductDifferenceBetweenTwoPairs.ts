function maxProductDifference(nums: number[]): number {
  let smallest = Infinity,
    secondSmallest = Infinity - 1,
    largest = -Infinity,
    secondLargest = -Infinity + 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < secondSmallest) {
      if (nums[i] < smallest) {
        secondSmallest = smallest;
        smallest = nums[i];
      } else secondSmallest = nums[i];
    }
    if (nums[i] > secondLargest) {
      if (nums[i] > largest) {
        secondLargest = largest;
        largest = nums[i];
      } else secondLargest = nums[i];
    }
  }
  return largest * secondLargest - smallest * secondSmallest;
}
