function findSpecialInteger(arr: number[]): number {
  const numMap = new Map<number, number>();
  let highest = -1,
    val = -1;
  for (let i = 0; i < arr.length; i++) {
    numMap.set(arr[i], (numMap.get(arr[i]) ?? 0) + 1);
    if (numMap.get(arr[i]) > highest) {
      val = arr[i];
      highest = numMap.get(arr[i]);
    }
  }
  return val;
}
