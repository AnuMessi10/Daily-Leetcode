function maxLength(arr: string[]): number {
  const n = arr.length,
    codeA = "a".charCodeAt(0);

  const patterns = Array.from(arr, (s) => {
    let pattern = 0;
    for (let i = 0, m = s.length; i < m; i++) {
      const offset = 1 << (s.charCodeAt(i) - codeA);
      if (pattern & offset) return 0;
      pattern |= offset;
    }
    return pattern;
  });

  const getMaxLength = (pattern: number, startIdx: number): number => {
    let max = 0;
    for (let i = startIdx; i < n; i++)
      if (patterns[i] && !(pattern & patterns[i])) {
        const len = arr[i].length + getMaxLength(pattern | patterns[i], i + 1);
        if (len > max) max = len;
      }
    return max;
  };

  return getMaxLength(0, 0);
}
