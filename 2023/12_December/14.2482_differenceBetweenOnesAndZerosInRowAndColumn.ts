function onesMinusZeros(grid: number[][]): number[][] {
  const rows = grid.length,
    cols = grid[0].length;

  let onesRow = Array(rows).fill(0),
    onesCol = Array(cols).fill(0);
  for (let row = 0; row < rows; row++)
    for (let col = 0; col < cols; col++)
      if (grid[row][col]) {
        onesRow[row]++;
        onesCol[col]++;
      }

  for (let row = 0; row < rows; row++) 
    // Zeros in row = Length of row - ones in row
    // Zeros in col = Length of col - ones in col
    // So onesRowi - zerosRowi + onesColj - zerosColj
    // = oneRowsi - (length of row - oneRowsi) + onesColj - (length of Col = onesColj)
    // = 2oneRowsi - length of row + 2oneColsj - length of col
    // = 2(oneRowsi + oneColsj) - length of row - length of col
    for (let col = 0; col < cols; col++)
      grid[row][col] = 2 * (onesRow[row] + onesCol[col]) - rows - cols;
  
  return grid;
}
