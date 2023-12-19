function imageSmoother(img: number[][]): number[][] {
  const rows = img.length,
    cols = img[0].length;

  const ans = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) {
      let numerator = 0,
        denominator = 0;

      for (let m = i - 1; m <= i + 1; m++)
        for (let n = j - 1; n <= j + 1; n++) {
          // Check bounds
          if (m >= 0 && m < rows && n >= 0 && n < cols) {
            numerator += img[m][n];
            denominator += 1;
          }
        }

      ans[i][j] = Math.floor(numerator / denominator);
    }

  return ans;
}
