import { CellType } from '../constants/types';
import { sleep } from '../helpers/animation';

export default async function DFSAlgorithm(
  grid: CellType[][],
  startNode: CellType,
  finishNode: CellType,
  speed: number,
  updateValues: (arr: CellType[][]) => void,
) {
  const visitedNodesInOrder = [];
  const nextNodesStack: CellType[] = [];
  nextNodesStack.push(startNode);
  while (nextNodesStack.length) {
    const currentNode = nextNodesStack.pop();
    if (currentNode === finishNode) return visitedNodesInOrder;
    if (
      currentNode &&
      !currentNode.isWall &&
      (currentNode.isStart || !currentNode.isVisited)
    ) {
      currentNode.isVisited = true;
      updateValues([...grid]);
      await sleep(speed);
      visitedNodesInOrder.push(currentNode);

      const { column, row } = currentNode;
      let nextNode: CellType;
      if (row > 0) {
        nextNode = grid[row - 1][column];
        if (!nextNode.isVisited) {
          nextNode.previousNode = currentNode;
          nextNodesStack.push(nextNode);
          updateValues([...grid]);
        }
      }
      if (row < grid.length - 1) {
        nextNode = grid[row + 1][column];
        if (!nextNode.isVisited) {
          nextNode.previousNode = currentNode;
          nextNodesStack.push(nextNode);
          updateValues([...grid]);
        }
      }
      if (column > 0) {
        nextNode = grid[row][column - 1];
        if (!nextNode.isVisited) {
          nextNode.previousNode = currentNode;
          nextNodesStack.push(nextNode);
          updateValues([...grid]);
        }
      }
      if (column < grid[0].length - 1) {
        nextNode = grid[row][column + 1];
        if (!nextNode.isVisited) {
          nextNode.previousNode = currentNode;
          nextNodesStack.push(nextNode);
          updateValues([...grid]);
        }
      }
    }
  }
}
