function transpose(matrix: number[][]): number[][] {
  const ogRows = matrix.length;
  const ogColumns = matrix[0].length;

  return Array.from({ length: ogColumns }, (_, row) =>
    Array.from({ length: ogRows }, (_, col) => matrix[col][row])
  );
}
