import { Settings, AnimationSpeed, MazesAndPatterns, Algorithm } from './types';

export const algoOptions = ['Dijkstra’s', 'A*', 'BFS', 'DFS'];
export const animationoptions = [50, 200, 500, 1000].sort((a, b) => a - b);
export const mazeOptions = ['None'];
export const TOAST_DURATION = 3000;
export const startNodeRow = 1;
export const startNodeCol = 1;
export const finishNodeRow = 0;
export const finishNodeCol = 0;

export const initSettingsObj: Settings = {
  algorithm: algoOptions[0] as Algorithm,
  speed: animationoptions[1] as AnimationSpeed,
  mazesAndPatterns: mazeOptions[0] as MazesAndPatterns,
  startNodeRow,
  startNodeCol,
  finishNodeRow,
  finishNodeCol,
};
