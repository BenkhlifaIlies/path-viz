import { useContext, useState } from 'react';
import styled from 'styled-components';

import { CellType } from '../constants/types';
import CellNode from './common/cellNode';
import { AppContext } from '../context/context';

interface IProps {
  rows: number;
  columns: number;
}

const NodeGrid = ({ rows, columns }: IProps) => {
  const { values: grid } = useContext(AppContext);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  return (
    <StyledDiv $colums={columns} $rows={rows}>
      {grid.map((elR: CellType[]) => {
        return elR.map(elC => {
          return (
            <CellNode
              {...elC}
              key={`${elR.length}-${elC.column}`}
              isMouseDown={isMouseDown}
              setIsMouseDown={setIsMouseDown}
            />
          );
        });
      })}
    </StyledDiv>
  );
};

const StyledDiv = styled.div<{ $rows: number; $colums: number }>`
  border: 1px solid #454545;
  background-color: #454545;
  display: grid;
  grid-template-rows: repeat(${props => props.$rows}, 24px);
  grid-template-columns: repeat(${props => props.$colums}, 24px);
  grid-gap: 1px;
  margin: 2rem auto;
`;

export default NodeGrid;
