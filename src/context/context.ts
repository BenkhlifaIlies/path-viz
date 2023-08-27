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

const settingsObj: Settings = {
  algorithm: algoOptions[0] as Algorithm,
  speed: animationoptions[1] as AnimationSpeed,
  mazesAndPatterns: mazeOptions[0] as MazesAndPatterns,
  startNodeRow: 0,
  startNodeCol: 0,
  finishNodeRow: 0,
  finishNodeCol: 0,
};

const initialState = {
  values: [] as CellType[][],
  updateValues: () => {},
  settingslModalVisibility: false,
  toggleModalVisibility: () => {},
  pushNotification: () => {},
  settings: settingsObj,
  updateSettings: () => {},
};

export const AppContext = createContext<ContextType>(initialState);
