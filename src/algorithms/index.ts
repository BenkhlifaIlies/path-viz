import { Algorithm, CellType } from '../constants/types';
import dijkstraAlgorithm from './dijkstraAlgorithm';

export default async function findPathByAlgorithm(
  grid: CellType[][],
  algorithm: Algorithm,
  speed: number,
  startNode: CellType,
  finishNode: CellType,
  updateValues: (arr: CellType[][]) => void,
) {
  switch (algorithm) {
    case 'Dijkstra’s':
      return dijkstraAlgorithm(
        grid,
        startNode,
        finishNode,
        speed,
        updateValues,
      );
    default:
      break;
  }
}
