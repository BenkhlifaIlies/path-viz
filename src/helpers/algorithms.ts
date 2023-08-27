import { CellType } from '../constants/types';

function getAllNodes(grid: CellType[][]) {
  const array: CellType[] = [];
  grid.forEach(row => {
    return row.forEach(col => {
      array.push(col);
    });
  });

  return array;
}

function sortNodesByDistance(unvisitedNodes: CellType[]) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node: CellType, grid: CellType[][]) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node: CellType, grid: CellType[][]) {
  const neighbors = [];
  const { column, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][column]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][column]);
  if (column > 0) neighbors.push(grid[row][column - 1]);
  if (column < grid[0].length - 1) neighbors.push(grid[row][column + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
}

export {
  getAllNodes,
  sortNodesByDistance,
  updateUnvisitedNeighbors,
  getUnvisitedNeighbors,
};
