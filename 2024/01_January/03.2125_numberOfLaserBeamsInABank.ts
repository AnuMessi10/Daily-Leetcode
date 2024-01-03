function numberOfBeams(bank: string[]): number {
  let previous = 0,
    current = 0,
    beams = 0,
    rows = bank.length,
    cols = bank[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) if (bank[i][j] === "1") current++;

    if (current > 0) {
      if (previous !== 0) beams += previous * current;

      previous = current;
      current = 0;
    }
  }
  return beams;
}
