import React from 'react';
import styled from 'styled-components';
import { Settings } from '../../constants/types';

interface IProps {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
  value: number;
  target: string;
}

const Input = ({ settings, setSettings, value, target }: IProps) => {
  return (
    <StyledInput
      type="number"
      max={10}
      min={0}
      placeholder={String(value)}
      onChange={e =>
        setSettings({
          ...settings,
          [target]: Number(e.target.value),
        })
      }
    />
  );
};

const StyledInput = styled.input`
  width: 180px;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--dark-gray);
  background-image: none;
  background-color: white;
  border: 1px solid var(--dark-gray);
  border-radius: 8px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition:
    border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition:
    border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  transition:
    border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
`;

export default Input;
