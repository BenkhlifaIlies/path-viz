import { createContext } from 'react';
import {
  ContextType,
  CellType,
  Settings,
  AnimationSpeed,
  Algorithm,
  MazesAndPatterns,
} from '../constants/types';
import {
  algoOptions,
  animationoptions,
  mazeOptions,
} from '../constants/constants';

export const settingsObj: Settings = {
  algorithm: algoOptions[0] as Algorithm,
  speed: animationoptions[1] as AnimationSpeed,
  mazesAndPatterns: mazeOptions[0] as MazesAndPatterns,
  startNodeRow: 1,
  startNodeCol: 1,
  finishNodeRow: 3,
  finishNodeCol: 3,
};

const initialState = {
  values: [] as CellType[][],
  updateValues: () => {},

  settingslModalVisibility: false,
  toggleModalVisibility: () => {},

  settings: settingsObj,
  updateSettings: () => {},
};

export const AppContext = createContext<ContextType>(initialState);
