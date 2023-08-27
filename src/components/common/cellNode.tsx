import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/context';
import { StartNodeSvg, FinishNodeSvg } from './icons';

interface IProps {
  row: number;
  column: number;
  isStart: boolean;
  isFinish: boolean;
  isWall: boolean;
  isVisited: boolean;
  isInShortestPath: boolean;
  isMouseDown: boolean;
  setIsMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultProps = {
  isStart: false,
  isFinish: false,
  isWall: false,
  isVisited: false,
  isInShortestPath: false,
};

const CellNode = ({
  row,
  column,
  isStart,
  isFinish,
  isWall,
  isVisited,
  isInShortestPath,
  isMouseDown,
  setIsMouseDown,
}: IProps & typeof defaultProps) => {
  const {
    values: grid,
    updateValues,
    settings,
    updateSettings,
  } = useContext(AppContext);

  const className = isInShortestPath
    ? 'node-shortest-path'
    : isStart
    ? 'node-start'
    : isFinish
    ? 'node-finish'
    : isWall
    ? 'node-wall'
    : isVisited
    ? 'node-visited'
    : '';

  const handleClick = () => {
    if (isStart || isFinish) return;
    grid[row][column].isWall = !isWall;
    updateValues([...grid]);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (!(isStart || isFinish)) return;
    event.dataTransfer.setData(
      'text/plain',
      isStart ? 'startNode' : isFinish ? 'finishNode' : '',
    );
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    if (event.dataTransfer.getData('text/plain') === 'finishNode') {
      grid[row][column].isFinish = true;
      grid[settings.finishNodeRow][settings.finishNodeCol].isFinish = false;

      updateSettings({
        ...settings,
        finishNodeRow: row,
        finishNodeCol: column,
      });
    } else if (event.dataTransfer.getData('text/plain') === 'startNode') {
      grid[settings.startNodeRow][settings.startNodeCol].isStart = false;
      grid[row][column].isStart = true;

      updateSettings({ ...settings, startNodeRow: row, startNodeCol: column });
    }
    console.log(settings);
    updateValues([...grid]);
  };

  const handleMouseDown = () => {
    if (isStart || isFinish) return;
    setIsMouseDown(true);
  };

  const handleMouseOver = () => {
    if (!isMouseDown) return;

    grid[row][column].isWall = !isWall;
    updateValues([...grid]);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <StyledDiv
      draggable={isStart || isFinish ? true : false}
      onDragStart={e => handleDragStart(e)}
      onDrop={e => handleDrop(e)}
      onDragEnter={e => e.preventDefault()}
      onDragOver={e => e.preventDefault()}
      onMouseDown={handleMouseDown}
      onMouseOver={handleMouseOver}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      id={`row${row}-col${column}`}
      className={`node ${className}`}
    >
      {isStart && <StartNodeSvg />}
      {isFinish && <FinishNodeSvg />}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.node {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.node-wall {
    background-color: #080313;
  }

  &.node-visited {
    animation-name: visitedAnimation;
    animation-duration: 1.3s;
    animation-timing-function: ease-in-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  &.node-shortest-path {
    animation-name: shortestPath;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  @keyframes visitedAnimation {
    0% {
      transform: scale(0.3);
      background-color: #36096d;
      border-radius: 100%;
    }

    50% {
      background-color: #37d5d6;
    }

    75% {
      transform: scale(1.2);
      background: #00d99f;
      opacity: 0.7;
    }

    100% {
      transform: scale(1);
      background: #00beda;
      opacity: 0.7;
    }
  }

  @keyframes shortestPath {
    0% {
      transform: scale(0.65);
      background-color: #ffea00;
    }

    50% {
      transform: scale(1.3);
      background-color: #ffc000;
    }

    100% {
      transform: scale(1);
      background-color: #ffd500;
    }
  }
`;

CellNode.defaultProps = defaultProps;
export default CellNode;
