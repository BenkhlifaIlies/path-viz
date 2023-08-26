export type Settings = {
  algorithm: Algorithm;
  speed: AnimationSpeed;
  mazesAndPatterns: mazesAndPatterns;
  startNodeRow: number;
  startNodeCol: number;
  finishNodeRow: number;
  finishNodeCol: number;
};

export type Algorithm =
  | 'Bubble Sort'
  | 'Insertion Sort'
  | 'Selection Sort'
  | 'Quick Sort';

export type AnimationSpeed = 50 | 200 | 500 | 1000;

export type mazesAndPatterns = 'None';
