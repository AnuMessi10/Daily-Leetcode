function largestGoodInteger(num: string): string {
  let x: string | undefined;

  for (let i = 0; i < num.length - 2; i++) {
    const [a, b, c] = num.slice(i, i + 3);

    if (a === b && b === c) {
      if (!x || Number(x) < Number(a)) {
        x = a;
      }
    }
  }

  return x ? `${x}${x}${x}` : "";
}
