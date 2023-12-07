function largestOddNumber(num: string): string {
  let i = num.length;

  while (i--) {
    if (parseInt(num[i]) % 2 !== 0) return num.slice(0, i + 1);
  }

  return "";
}
