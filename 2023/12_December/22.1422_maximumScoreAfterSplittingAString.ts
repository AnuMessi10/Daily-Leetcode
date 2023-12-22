function maxScore(s: string): number {
  let leftZeros = 0,
    leftOnes = 0,
    max = -Infinity;

  for (let i = 0; i < s.length - 1; i++) {
    s[i] === "0" ? leftZeros++ : leftOnes++;
    max = Math.max(leftZeros - leftOnes, max);
  }

  leftOnes += Number(s[s.length - 1] === "1");

  return max + leftOnes;
}
