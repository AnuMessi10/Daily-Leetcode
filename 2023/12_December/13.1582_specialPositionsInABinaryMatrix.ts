function isSpecial(
  mat: number[][],
  { row, col }: { row: number; col: number }
): boolean {
  for (let i = 0; i < mat.length; i++)
    if (mat[i][col] && i !== row) return false;

  for (let j = 0; j < mat[row].length; j++)
    if (mat[row][j] && j !== col) return false;

  return true;
}

function numSpecial(mat: number[][]): number {
  let ans = 0;

  for (let row = 0; row < mat.length; row++)
    for (let col = 0; col < mat[row].length; col++)
      if (mat[row][col] && isSpecial(mat, { row, col })) ans++;

  return ans;
}
