function uniqueOccurrences(arr: number[]): boolean {
  const countMap = new Map<number, number>(),
    countSet = new Set<number>();

  for (const elem of arr) countMap.set(elem, (countMap.get(elem) || 0) + 1);

  for (const value of countMap.values()) {
    if (countSet.has(value)) return false;
    countSet.add(value);
  }

  return true;
}
