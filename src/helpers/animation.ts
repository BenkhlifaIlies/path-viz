import { CellType } from '../constants/types';

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
export const getNodesInShortestPathOrder = (finishNode: CellType) => {
  const nodesInShortestPathOrder = [];
  let currentNode: CellType | null = finishNode;
  while (currentNode) {
    nodesInShortestPathOrder.unshift({ ...currentNode });
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
};

export const animateShortestPath = async (
  grid: CellType[][],
  nodesInShortestPathOrder: CellType[],
) => {
  nodesInShortestPathOrder.forEach(async (node: CellType, index: number) => {
    grid[node.row][node.column].isInShortestPath = true;
    await sleep(index * 50);
  });
};
