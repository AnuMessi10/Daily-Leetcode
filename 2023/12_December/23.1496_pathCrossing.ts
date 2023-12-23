const mapOperation: Record<string, { x: number; y: number }> = {
  N: { x: 0, y: 1 },
  S: { x: 0, y: -1 },
  E: { x: 1, y: 0 },
  W: { x: -1, y: 0 },
};

function getKey({ x, y }: { x: number; y: number }): string {
  return `${x},${y}`;
}

function isPathCrossing(path: string): boolean {
  const visitedPoints = new Set<string>();

  let currentPoint = { x: 0, y: 0 };

  visitedPoints.add(getKey(currentPoint));

  for (const direction of path) {
    const operation = mapOperation[direction];
    currentPoint = {
      x: currentPoint.x + operation.x,
      y: currentPoint.y + operation.y,
    };

    const currentPointKey = getKey(currentPoint);

    if (visitedPoints.has(currentPointKey)) return true;

    visitedPoints.add(currentPointKey);
  }

  return false;
}
