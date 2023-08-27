export const creaateInitialGrid = (
  rowCount: number,
  colCount: number,
  startNodeRow: number,
  startNodeCulomn: number,
  finishNodeRow: number,
  finishNodeColumn: number,
) => {
  const initialGrid = [];
  for (let row = 0; row < rowCount; row++) {
    const currentRow = [];
    for (let column = 0; column < colCount; column++) {
      currentRow.push(
        createNode(
          row,
          column,
          startNodeRow,
          startNodeCulomn,
          finishNodeRow,
          finishNodeColumn,
        ),
      );
    }
    initialGrid.push(currentRow);
  }
  return initialGrid;
};

export const createNode = (
  row: number,
  column: number,
  startNodeRow: number,
  startNodeCulomn: number,
  finishNodeRow: number,
  finishNodeColumn: number,
) => {
  return {
    row,
    column,
    isStart: row === startNodeRow && column === startNodeCulomn,
    isFinish: row === finishNodeRow && column === finishNodeColumn,
    isWall: false,
    isVisited: false,
    isInShortestPath: false,
    distance: Number.POSITIVE_INFINITY,
    previousNode: null,
    distanceToFinishNode:
      Math.abs(finishNodeRow - row) + Math.abs(finishNodeColumn - column),
  };
};
