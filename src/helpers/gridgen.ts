import { CellType } from '../constants/types';

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

export const resetGrid = (
  grid: CellType[][],
  finishNodeRow: number,
  finishNodeCol: number,
) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].isVisited = false;
      grid[i][j].isInShortestPath = false;
      grid[i][j].distance = Number.POSITIVE_INFINITY;
      grid[i][j].previousNode = null;
      grid[i][j].distanceToFinishNode =
        Math.abs(finishNodeRow - grid[i][j].row) +
        Math.abs(finishNodeCol - grid[i][j].column);
    }
  }
  return [...grid];
};
