function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i: number = 0,
    j: number = 0;

  while (i < g.length && j < s.length)
    if (g[i] <= s[j]) {
      i++;
      j++;
    } else j++;

  return i;
}
