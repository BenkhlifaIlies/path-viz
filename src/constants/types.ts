export type ContextType = {
  values: CellType[][];
  updateValues: (arr: CellType[][]) => void;

  settings: Settings;
  updateSettings: (sett: Settings) => void;

  settingslModalVisibility: boolean;
  toggleModalVisibility: () => void;
};

export type Settings = {
  algorithm: Algorithm;
  speed: AnimationSpeed;
  mazesAndPatterns: MazesAndPatterns;
  startNodeRow: number;
  startNodeCol: number;
  finishNodeRow: number;
  finishNodeCol: number;
};

export type Algorithm = 'Dijkstra’s' | 'A*' | 'BFS' | 'DFS';

export type AnimationSpeed = 50 | 200 | 500 | 1000;

export type MazesAndPatterns = 'None';

export type ToastType = {
  id: number;
  message: string;
};

export type CellType = {
  row: number;
  column: number;
  isStart: boolean;
  isFinish: boolean;
  isWall: boolean;
  isVisited: boolean;
  isInShortestPath: boolean;
  distance: number;
  distanceToFinishNode: number;
  previousNode: CellType | null;
};
