function buyChoco(prices: number[], money: number): number {
  let smallest = Infinity,
    secondSmallest = Infinity - 1;

  for (const price of prices) {
    if (smallest > price) {
      secondSmallest = smallest;
      smallest = price;
    } else secondSmallest = Math.min(secondSmallest, price);
  }

  const moneyLeft = money - smallest - secondSmallest;

  return moneyLeft >= 0 ? moneyLeft : money;
}
