class RandomizedSet {
  randomizedSet: Set<number>;

  constructor() {
    this.randomizedSet = new Set<number>();
  }

  insert(val: number): boolean {
    if (this.randomizedSet.has(val)) return false;

    this.randomizedSet.add(val);

    return true;
  }

  remove(val: number): boolean {
    if (!this.randomizedSet.has(val)) return false;

    this.randomizedSet.delete(val);

    return true;
  }

  getRandom(): number {
    return [...this.randomizedSet.values()][
      Math.floor(Math.random() * this.randomizedSet.size)
    ];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
