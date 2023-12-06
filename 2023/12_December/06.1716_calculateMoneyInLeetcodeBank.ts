function totalMoney(n: number): number {
  let sum = 0,
    counter = 1,
    day = 1;

  for (let i = 0; i < n; i++) {
    if (day > 1 && (day - 1) % 7 === 0) {
      counter = Math.floor((day - 1) / 7) + 1;
    }
    sum += counter++;
    day++;
  }

  return sum;
}
