import { CellType } from '../constants/types';
import {
  getAllNodes,
  sortNodesByDistance,
  getUnvisitedNeighbors,
} from '../helpers/algorithms';
import { sleep } from '../helpers/animation';

export default async function dijkstraAlgorithm(
  grid: CellType[][],
  startNode: CellType,
  finishNode: CellType,
  speed: number,
  updateValues: (arr: CellType[][]) => void,
) {
  const visitedNodesInOrder = [];
  //   runInAction(() => {
  // startNode.distance = 0;
  //   });
  grid[startNode.row][startNode.column].distance = 0;
  updateValues([...grid]);
  const unvisitedNodes = getAllNodes(grid);
  while (unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();

    if (closestNode && !closestNode.isWall) {
      if (closestNode.distance === Infinity) return [...visitedNodesInOrder];
      //   runInAction(() => {
      //   closestNode.isVisited = true;
      //   });
      closestNode.isVisited = true;
      updateValues([...grid]);
      await sleep(speed);
      visitedNodesInOrder.push(closestNode);
      if (closestNode === finishNode) return [...visitedNodesInOrder];
      updateUnvisitedNeighbors(closestNode, grid, updateValues);
    }
  }
}

function updateUnvisitedNeighbors(
  node: CellType,
  grid: CellType[][],
  updateValues: (arr: CellType[][]) => void,
) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    // runInAction(() => {
    // neighbor.distance = node.distance + 1;
    // neighbor.previousNode = node;
    // });
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
    updateValues([...grid]);
  }
}
