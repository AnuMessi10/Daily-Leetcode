function minCost(colors: string[], neededTime: number[]): number {
  let totalTime = 0,
    i = 0,
    j = 0;

  while (i < neededTime.length && j < neededTime.length) {
    let currTotal = 0,
      currMax = 0;

    while (j < neededTime.length && colors[i] === colors[j]) {
      currTotal += neededTime[j];
      currMax = Math.max(currMax, neededTime[j]);
      j++;
    }

    totalTime += currTotal - currMax;
    i = j;
  }

  return totalTime;
}
